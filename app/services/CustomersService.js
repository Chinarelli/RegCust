class CustormersService {
  constructor(pgConnect) {
    this.pgConnect = pgConnect;
  }

  async findagent(scope) {
    let message = '';
    let datacust = '';
    const codreg = scope.message.text.replace('/customers', '').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
    if (codreg) {
      const agents = await this.pgConnect.query('SELECT * FROM CLIENTES WHERE cli_reg_codigo = $1', [codreg]);
      if (agents.rowCount > 0) {
        agents.rows.forEach((element) => {
          datacust = (`${element.cli_codigo} - ${element.cli_fantasia}\n`);
          if ((message.length + datacust.length) > 4096) {
            scope.sendMessage(message);
            message = datacust;
          } else {
            message += datacust;
          }
        });
      } else {
        message = 'Informed Regions Was Not Found';
      }
    } else {
      message = 'Search field Not Informed';
    }
    scope.sendMessage(message);

    // this.pgConnect.end();
  }

  async findagentcust(scope) {
    let message = '';
    let datacust = '';
    let datarep = '';
    const descagent = scope.message.text.replace('/agentcust', '').trim();
    if (descagent) {
      const agents = await this.pgConnect.query('SELECT C.cli_codigo, C.cli_fantasia, R.reg_codigo, R.reg_descricao '
                                              + 'FROM CLIENTES AS C JOIN REGIOES AS R ON C.cli_reg_codigo = R.reg_codigo '
                                              + 'WHERE LOWER(cli_fantasia) like LOWER($1) ORDER BY R.reg_codigo', [`%${descagent}%`]);
      let codrep = null;
      const formatcust = '========= Customers =========';
      if (agents.rowCount > 0) {
        agents.rows.forEach((element) => {
          if (codrep !== element.reg_codigo) {
            datarep = (`\nRepresentante: ${element.reg_codigo} - ${element.reg_descricao}\n`);
            datacust = (`${datarep}${formatcust}\n${element.cli_codigo} - ${element.cli_fantasia}\n`);
          } else {
            datarep = '';
            datacust = (`${element.cli_codigo} - ${element.cli_fantasia}\n`);
          }
          codrep = element.reg_codigo;
          if ((message.length + datacust.length) > 4096) {
            scope.sendMessage(message);
            message = datacust;
          } else {
            message += datacust;
          }
        });
      } else {
        message = 'Informed Customer Was Not Found';
      }
    } else {
      message = 'Search field Not Informed';
    }
    scope.sendMessage(message);
  }
}

module.exports = CustormersService;

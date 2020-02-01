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
      message = 'Search field Not Informed';
    }
    scope.sendMessage(message);

    // this.pgConnect.end();
  }

  async findagentcust(scope) {
    let message = '';
    let datacust = '';
    const descagent = scope.message.text.replace('/agentcust', '').trim();
    if (descagent) {
      const agents = await this.pgConnect.query('SELECT C.cli_codigo, C.cli_fantasia, R.reg_codigo, R.reg_descricao '
                                              + 'FROM CLIENTES AS C JOIN REGIOES AS R ON C.cli_reg_codigo = R.reg_codigo '
                                              + 'WHERE LOWER(cli_fantasia) like LOWER($1) ORDER BY R.reg_codigo', [`%${descagent}%`]);

      agents.rows.forEach((element) => {
        datacust = (`${element.cli_codigo} - ${element.cli_fantasia}\n`);
        datacust += (`${element.reg_codigo} - ${element.reg_descricao}\n\n`);
        if ((message.length + datacust.length) > 4096) {
          scope.sendMessage(message);
          message = datacust;
        } else {
          message += datacust;
        }
      });
    } else {
      message = 'Search field Not Informed';
    }
    scope.sendMessage(message);

    // this.pgConnect.end();
  }
}

module.exports = CustormersService;

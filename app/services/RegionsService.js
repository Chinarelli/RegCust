class RegionsService {
  constructor(pgConnect) {
    this.pgConnect = pgConnect;
  }

  async findregions(scope) {
    const regions = await this.pgConnect.query('SELECT * FROM REGIOES');
    let message = '';
    regions.rows.forEach((element) => {
      message += (`${element.reg_codigo} - ${element.reg_descricao}\n`);
    });
    scope.sendMessage(message);
    // this.pgConnect.end();
  }
}

module.exports = RegionsService;

const PgConnect = require('./DataBaseService');

const pgConnect = new PgConnect();

class Custormers {
  findcustomers(scope) {
    const url = scope.message.text.replace('/short', '');
    kurzerurl.short(url).then((response) => {
      scope.sendMessage(response);
    }).catch((error) => {
      scope.sendMessage(error);
    });
  }
}

module.exports = Custormers;

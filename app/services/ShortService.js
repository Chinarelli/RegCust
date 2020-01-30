const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool()

class ShortService {
  short(scope) {
    const url = scope.message.text.replace('/short', '');
    kurzerurl.short(url).then((response) => {
      scope.sendMessage(response);
    }).catch((error) => {
      scope.sendMessage(error);
    });
  }
}

module.exports = ShortService;

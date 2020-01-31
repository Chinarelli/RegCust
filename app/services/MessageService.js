class MessageService {
  hanlde(scope) {
    scope.sendMessage('Command not found');
  }

  start(scope) {
    scope.sendMessage(`Hello, ${scope.message.from.firstName}`);
  }

  help(scope) {
    scope.sendMessage('I can help you short url and slug string.\n\nYou can control me by sending these commands:\n\n/regions - View Representatives\n/customers {string} - Enter the representative code to locate the customers\n/agentcust {string} - Customer search by name\n/help - command list');
  }
}

module.exports = MessageService;

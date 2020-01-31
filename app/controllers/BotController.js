const telegram = require('telegram-node-bot');

const MessageService = require('../services/MessageService');
const CustomersService = require('../services/CustomersService');
const RegionsService = require('../services/RegionsService');
const pgConnect = require('../services/DataBaseService');

const telegramConfig = require('../configs/telegram');

const { TelegramBaseController } = telegram;
const { TextCommand } = telegram;
const bot = new telegram.Telegram(telegramConfig.token, {
  webAdmin: {
    port: 7771,
    host: 'localhost',
  },
  workers: 1,
});

// const pgConnect = new PgConnect();
const messageService = new MessageService();
const customersService = new CustomersService(pgConnect);
const regionsService = new RegionsService(pgConnect);


class BotController extends TelegramBaseController {
  async handle(scope) {
    messageService.hanlde(scope);
  }

  async start(scope) {
    messageService.start(scope);
  }

  async customers(scope) {
    customersService.findagent(scope);
  }

  async agentcust(scope) {
    customersService.findagentcust(scope);
  }

  async regions(scope) {
    regionsService.findregions(scope);
  }

  async help(scope) {
    messageService.help(scope);
  }

  get routes() {
    return {
      start: 'start',
      customers: 'customers',
      agentcust: 'agentcust',
      regions: 'regions',
      help: 'help',
    };
  }
}

bot.router
  .when(new TextCommand('/start', 'start'), new BotController())
  .when(new TextCommand('/customers', 'customers'), new BotController())
  .when(new TextCommand('/agentcust', 'agentcust'), new BotController())
  .when(new TextCommand('/regions', 'regions'), new BotController())
  .when(new TextCommand('/help', 'help'), new BotController())
  .otherwise(new BotController());

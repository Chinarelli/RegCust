const telegram = require('telegram-node-bot');

const MessageService = require('../services/MessageService');
const CustomersService = require('../services/CustomersService');
const RegionsService = require('../services/RegionsService');

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

const messageService = new MessageService();
const customersService = new CustomersService();
const regionsService = new RegionsService();

class BotController extends TelegramBaseController {
  async handle(scope) {
    messageService.hanlde(scope);
  }

  async start(scope) {
    messageService.start(scope);
  }

  async customers(scope) {
    customersService.findcustomers(scope);
  }

  async regions(scope) {
    regionsService.slug(scope);
  }

  async help(scope) {
    messageService.help(scope);
  }

  get routes() {
    return {
      start: 'start',
      customers: 'customers',
      regions: 'regions',
      help: 'help'
    };
  }
}

bot.router
  .when(new TextCommand('/start', 'start'), new BotController())
  .when(new TextCommand('/customers', 'customers'), new BotController())
  .when(new TextCommand('/regions', 'regions'), new BotController())
  .when(new TextCommand('/help', 'help'), new BotController())
  .otherwise(new BotController());

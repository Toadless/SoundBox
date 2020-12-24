//General imports
import Discord from 'discord.js';

//Local imports
import * as Config from '../config.json';
import Logger from './logger';
import Load from './load';

//Constants
const bot = new Discord.Client();

bot.setMaxListeners(100); //Setting the max amount of event listeners.

//Displaying banner
Logger.banner('Sound Box')

bot.on('ready', () => {
    Logger.success('Logged into bot!')
    Load(bot); //Loading all of the bots files like - play - prefix - skip when the bot starts
})

//Logging into the bot
bot.login(Config.bot.token);
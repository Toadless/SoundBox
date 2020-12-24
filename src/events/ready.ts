//Local imports
import Logger from '../logger';
import Client from '../@types/Client.interface';

const Ready: Function = (bot: Client) => {
    bot.manager.init(bot.user.id);
    Logger.success('Sound Box ready.')
}

//Exports
export default Ready;
//Local imports
import Client from './@types/Client.interface';
import Logger from './logger';

const Activity: Function = (bot: Client) => {
    try {
        bot.user.setActivity('Music | !help', { type: "PLAYING" })
        Logger.success('Successfully set the bots status.')
    } catch (err) {
        Logger.error('Failed to set the status.')
    }
}

//Exports
export default Activity;
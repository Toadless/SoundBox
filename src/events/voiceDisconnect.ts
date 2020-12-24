//Local imports
import Client from '../@types/Client.interface';
import Logger from '../logger';

//Constants
const logger = new Logger();

const voiceDisconnect: Function = (bot: Client) => {
    bot.manager.on('playerMove', (payload: any) => {
        let guild: String = payload.guild;
        let player: any = bot.manager.players.get(guild);
        if (player) return player.destroy();
        else logger.error(`Failed to stop the player after being disconnected in ${guild}`)
    })
}

//Exports
export default voiceDisconnect;
//Local imports
import Guild from '../database/models/guild.model';
import Logger from '../logger';
import Client from '../@types/Client.interface';

const guildRemove: Function = (bot: Client) => {
    bot.on('guildDelete', async (guild: any) => {
        try {
            let oldGuild = await Guild.findOne({
                id: guild.id
            })
            if (!oldGuild) return null;
            let rmguild = oldGuild.remove(); //Rm stands for remove
            Logger.success(`Ive been removed from ${guild.id}! Successfully destroyed the database.`);
            return rmguild;
        } catch (err) {
            Logger.warn(`Ive been removed from ${guild.id}! Unable to destroy the database,`)
        }
    })
}

//Exports
export default guildRemove;
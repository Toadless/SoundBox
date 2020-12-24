//Local imports
import Guild from '../../database/models/guild.model';
import Logger from '../../logger';
import Client from '../../@types/Client.interface';
import Message from '../../@types/Message.interface';
import GuildType from '../../@types/Guild.interface';

const Pause = (bot: Client) => {
    bot.on('message', async (message: Message) => {
        try {
            const guild: GuildType = await Guild.findOne({
                id: message.guild.id,
            }) as GuildType;
            const prefix: String = guild.prefix;
            if (message.content.startsWith(`${prefix}pause`)) {
                if (!message.member.voice.channel) {
                    message.reply("You must be in a voice channel to do this.");
                    return;
                }
                const player: any = bot.manager.players.get(message.guild.id);
                if (!player) {
                    return message.reply('Nothing playing at the moment.')
                }
                player.pause(player.playing);
                return message.channel.send(`Player is now ${player.playing ? "resumed" : "paused"}.`);
            } else {
                return null;
            }
        } catch (err) {
            Logger.warn(`An error occured whilst pausing a song in ${message.guild.id}`)
            message.reply('An error occured.')
        }
    })
}

//Exports
export default Pause;
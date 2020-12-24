//Local imports
import Guild from '../../database/models/guild.model';
import Logger from '../../logger';
import Client from '../../@types/Client.interface';
import Message from '../../@types/Message.interface';
import GuildType from '../../@types/Guild.interface';

const logger = new Logger();

const Shuffle = (bot: Client) => {
    bot.on('message', async (message: Message) => {
        try {
            const guild: GuildType = await Guild.findOne({
                id: message.guild.id,
            }) as GuildType;
            const prefix: String = guild.prefix;
            if (message.content.startsWith(`${prefix}shuffle`)) {
                if (!message.member.voice.channel) {
                    message.reply("You must be in a voice channel to do this.");
                    return;
                }
                const player: any = bot.manager.players.get(message.guild.id);
                if (!player) {
                    return message.reply('Nothing playing at the moment.')
                }
                player.queue.shuffle();
                message.channel.send('Ive shuffled the queue for you.')
            } else {
                return null;
            }
        } catch (err) {
            logger.warn(`An error occured whilst skipping a song in ${message.guild.id}`)
            message.reply('An error occured.')
        }
    })
}

//Exports
export default Shuffle;
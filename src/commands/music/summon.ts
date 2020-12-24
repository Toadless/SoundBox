//Local imports
import Guild from '../../database/models/guild.model';
import Logger from '../../logger';
import Client from '../../@types/Client.interface';
import Message from '../../@types/Message.interface';
import GuildType from '../../@types/Guild.interface';

const logger = new Logger();

const Summon: Function = (bot: Client) => {
    bot.on('message', async (message: Message) => {
        try {
            const guild: GuildType = await Guild.findOne({
                id: message.guild.id,
            }) as GuildType;
            const prefix: String = guild.prefix;
            if (message.content.startsWith(`${prefix}summon`)) {
                if (!message.member.voice.channel) {
                    message.reply("You must be in a voice channel to do this.");
                    return;
                }
                const player = bot.manager.create({
                    guild: message.guild.id,
                    voiceChannel: message.member.voice.channel.id,
                    textChannel: message.channel.id,
                });
                player.connect();
                message.channel.send(`I have joined the voice channel for you.`);
                logger.success(`Successfully summoned to ${message.guild.id}`);
            } else {
                return null;
            }
        } catch (err) {
            message.reply('An error occured.')
            logger.warn(`An error occured whist summoning to ${message.guild.id}`)
        }
    })
}

//Exports
export default Summon;
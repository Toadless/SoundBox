//Local imports
import Client from './@types/Client.interface';

//All module imports - barrel
import {
    Connect,
    guildCreate,
    MusicManager,
    Ready,
    Raw,
    Play,
    Skip,
    Stop,
    Queue,
    Prefix,
    Help,
    Activity,
    Volume,
    NowPlaying,
    Pause,
    Shuffle,
    Summon,
    voiceDisconnect,
    guildRemove
} from './barrel';

const Load: Function = (bot: Client) => {
    //Loading all modules
    Connect(bot);
    guildCreate(bot);
    MusicManager(bot);
    Ready(bot);
    Raw(bot);
    Play(bot);
    Skip(bot);
    Stop(bot);
    Queue(bot);
    Prefix(bot);
    Help(bot);
    Activity(bot);
    Volume(bot);
    NowPlaying(bot);
    Pause(bot);
    Shuffle(bot);
    Summon(bot);
    voiceDisconnect(bot);
    guildRemove(bot);
}

//Exports
export default Load;
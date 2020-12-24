//General imports
import mongoose from 'mongoose';

//General imports
import Config from '../../config.json';
import Logger from '../logger';

const Options: Object = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}

const Connect: Function = () => {
    try {
        mongoose.connect(Config.bot.mongodb, Options)
        mongoose.connection.on('connected', () => {
            Logger.success('Successfully connected to database.')
        })
    } catch (err) {
        Logger.error('Failed to connect to the database.')
    }
    mongoose.connection.on('disconnected', () => {
        Logger.error('Unexpectedly dissconnected from the database.')
    })
}

//Exports
export default Connect;
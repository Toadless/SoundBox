//General imports
import chalk from "chalk";
import symbols from "log-symbols";
import figlet from 'figlet';

class Logger {
    Logger: any;
    static banner(message: string): void {
        figlet(message, (err, result) => {
            console.log(chalk.blue(result))
        })
    }
    static success(message: String): void {
        console.log(`${new Date()} ${symbols.success} ${chalk.greenBright(message)}`)
    }
    static error(message: String): void {
        console.log(`${new Date()} ${symbols.error} ${chalk.redBright(message)}`)
    }
    static warn(message: String): void {
        console.log(`${new Date()} ${symbols.warning} ${chalk.gray.bold(message)}`)
    }
    static info(message: String): void {
        console.log(`${new Date()} ${symbols.info} ${chalk.redBright.bold(message)}`)
    }
}

//Exports
export default Logger;
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const mylog = (text, color) => {
	return !color ? chalk.greenBright('[ ZENN BOT ] ') + chalk.magentaBright(text) : chalk.greenBright('[ ZENN BOT ] ') + chalk.keyword(color)(text)
}

const infolog = (text) => {
	return chalk.greenBright('[ ZENN BOT ] ') + chalk.magentaBright(text)
}

module.exports = {
	color,
	bgcolor,
    mylog,
    infolog
}

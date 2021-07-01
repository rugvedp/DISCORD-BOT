const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();
const welcome = require('./events/guildMemberAdd');
const prefix = '-';
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
client.once('ready', () => {
	console.log('Bot is online');
	client.user.setPresence({ activity: { name: 'Use -help' }, status: 'online' });
	welcome(client)
});
client.on('message', async message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLocaleLowerCase();

	if (command === 'tictactoe') {
		client.commands.get('tictactoe').execute(message, args, client)
	}
	if (command === 'meme') {
		client.commands.get('meme').execute(message, args, client)
	}
	if (command === 'suggest') {
		client.commands.get('suggest').execute(message, args, client)
	}
	if (command === 'translate') {
		client.commands.get('translate').execute(message, args, client)
	}
	if (command === 'rps') {
		client.commands.get('rps').execute(message, args, client)
	}
	if (command === 'calc') {
		client.commands.get('calc').execute(message, args, client)
	}
	if (command === 'say') {
		client.commands.get('say').execute(message, args, client)
	}
	if (command === 'purge') {
		client.commands.get('purge').execute(message, args, client)
	}
	if (command === 'avatar') {
		client.commands.get('avatar').execute(message, args, client)
	}
	if (command === 'hack') {
		client.commands.get('hack').execute(message, args, client)
	}
    if (command === 'kick') {
		client.commands.get('kick').execute(message, args, client)
	}
    if (command === 'ban') {
		client.commands.get('ban').execute(message, args, client)
	}
    if (command === 'unban') {
		client.commands.get('unban').execute(message, args, client)
	}
	if (command === 'help') {
		client.commands.get('help').execute(message, args, client)
	}
	if (command === 'vote') {
		client.commands.get('vote').execute(message, args, client)
	}	
	if (command === 'csgo') {
		client.commands.get('csgo').execute(message, args, client)
	}
	if (command === 'rust') {
		client.commands.get('rust').execute(message, args, client)
	}
	if (command === 'l4d2') {
		client.commands.get('l4d2').execute(message, args, client)
	}

});


client.login(process.env.TOKEN);
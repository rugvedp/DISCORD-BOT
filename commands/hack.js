const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
	name: 'hack',
	description: 'Hacking members',
	async execute(message, args, client) {

        const  mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
         if(!mentionedMember) return message.channel.send("Please mention someone to hack");
        message.channel.send(`Hacking ${mentionedMember}........`)
        .then(msg => {
            msg.edit('▚ Hacking started..........');
            ms(3000);
            msg.edit('▞ Fetching IP address....');
            ms('5s')
            msg.edit('▚ IP 0.0.0.0 ');
            ms('3s');
            msg.edit('▞ Hacking discord login info.....');
            ms('3s');
            msg.edit(`▚ Email- ${mentionedMember.user.tag}@gmail.com \nPassword- ${mentionedMember.user}`);
            ms('3s');
            msg.edit('▞ Hacking your paypal account');
            ms('5s');
            msg.edit('▚ Card no. 5555 0000 9999 1111 \n Card Pin. 1234');
            ms('3s');
            msg.edit('▞ With drawing money from account ');
            ms('3s');
            msg.edit('▚ Got 1000$ from bank account');
            ms('3s');
            msg.edit('▞ Buying PS5 for developer from this money');
            ms('3s');
            msg.edit('▚ Fetching your mobile number.....');
            ms('3s');
            msg.edit('▞ 123456798');
            ms('3s');
            msg.edit('▚ Caling on your number......\`Call Rejected\`').then(() => {
                message.channel.send(`***Succesfuly hacked ${mentionedMember}.Now I am gonna to sell this data to another hackers***`);
            })
        })
	},
};
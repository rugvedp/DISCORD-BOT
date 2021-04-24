const tictactoe = require('reconlx');
module.exports = {
	name: 'tictactoe',
	description: 'Play games',
	async execute(message, args, client) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send("Please mention your oppenent")

        new tictactoe({
            player_two: member,
            message: message
        })


	},
};
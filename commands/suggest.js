const Discord = require('discord.js');
module.exports = {
    name: 'suggest',
    description: 'Use this command for suggetion in your server',
    async execute(message, args, client) {
        let suggestion = args.join(' ');
        if (!args[0]) return message.channel.send('You must state something to suggest');
        const embed = new Discord.MessageEmbed()
            .setTitle(`***Suggestion Portal***`)
            .addField(`Suggestion: ${suggestion}`, `This was suggested by ${message.author.tag}`)
            .setColor('RANDOM');
        message.channel.send(embed).then(sendMessage => sendMessage.react('👍')).then(reaction => reaction.message.react('👎'));
    },
};
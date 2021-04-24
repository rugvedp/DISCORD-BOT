const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'This command is used to display help embed',
    async execute(message, args) {
        const sectionEmbed = new Discord.MessageEmbed()
            .setTitle('「Bot Help Section」')
            .setColor('RANDOM')
            .setDescription('Use -help [Section name to access another section.')
            .addField('🤪Fun Commands', 'Commands that all users can user that are for fun and have no purpose.')
            .addField('📋Information commands', 'Commands that return some form of important imformation.')
            .addField('👨‍💻Moderation commands', 'This commands only used for moderation purposes within a server.')
            .addField('🛠️Tool commands', 'Commands that add features to a server.')
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp();

        const infoEmbed = new Discord.MessageEmbed()
            .setTitle('📋Information Commands📋')
            .addField('Social Command', 'Displays social media in an embed.');

        const funEmbed = new Discord.MessageEmbed()
            .setTitle('🤪Fun Commands🤪')
            .addField('Avatar Command', 'To see users avatar.')
            .addField('Meme Commands', 'To get funny Meme to the channel.')
            .addField('Vote Command', 'Make votes/polls for users')
            .addField('Suggest Command', 'Use to take suggestions from users')
            .addField('Calc Command', 'Calculation operation between 2 numbers')
            .addField('RPS', 'Rock Paper Scissors')
            .addField('tictactoe', 'Play tictactoe with your friend')
            .addField('Translate', 'You can use this command to translate any language to english')
            .addField('Say Command', 'Make the bot say a message to the channel.');


        const moderationEmbed = new Discord.MessageEmbed()
            .setTitle('👨‍💻Moderation Commands👨‍💻')
            .addField('Ban Command', 'Bans a member from the server')
            .addField('Kick Command', 'Kicks a member from the server')
            .addField('Purge Command', 'Purges messages within a channel')
            .addField('Unban Command', 'Unbans a member from the server');


        if (!args[0]) return message.channel.send(sectionEmbed);
        if (args[0] == 'information') return message.channel.send(infoEmbed);
        else if (args[0] == 'fun') return message.channel.send(funEmbed);
        else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
    },
};
const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'This command is used to display members avatar',
    async execute(message, args) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const embed = new Discord.MessageEmbed()
            .setTitle(mentionedMember.user.tag)
            .setColor('RANDOM')
            .setImage(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setTimestamp()
            .setDescription("You are awesome");

        message.channel.send(embed);
    },
};
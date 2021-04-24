const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'Kicking members',
    async execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot kick that guy fool");
        let reason = args.slice(1).join(" ");
        if (!reason) reason = 'No reason Given';

        const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`You were kicked ${message.guild.name}`)
            .setDescription(`Reason ${reason}`)
            .setColor('RANDOM')
            .setTimestamp();

        const mentionedMember = message.mentions.members.first();
        if (!args[0]) return message.channel.send("You need to state username");
        if (!mentionedMember.kickable) return message.channel.send("I cannot kick that member");
        if (!mentionedMember) return message.channel.send("The member mentioned is not in server");
        try {
            await mentionedMember.send(kickEmbed);
            message.channel.send(`${mentionedMember} has been kicked from server`);

        } catch (err) {
            console.log(`I was unable to kick him`);
        }

        try {
            await mentionedMember.kick(reason)
        } catch (err) {
            console.log(err);
            message.channel.send("I was unable that mentioned member");
        }
    },
};
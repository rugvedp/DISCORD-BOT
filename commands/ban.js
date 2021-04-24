const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'Banning members from server',
    async execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permission fool");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have ban permission");

        let reason = args.slice(1).join(" ");
        const memtionedMember = message.mentions.members.first();
        if (!reason) reason = 'No reason Given';
        if (!args[0]) return message.channel.send("You must staet someone to ban");
        if (!memtionedMember) return message.channel.send("Member is not in server");
        if (!memtionedMember.bannable) return message.channel.send("I cannot ban that member");

        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`You have been banned from ${message.guild.me}`)
            .setDescription(`Reason for boing banned:${reason}`)
            .setTimestamp()
            .setColor('RANDOM');

        await memtionedMember.send(banEmbed).catch(err => console.log(err));
        await memtionedMember.ban({
            days: 7,
            reason: reason
        }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned" + memtionedMember.user.tag));
    },
};
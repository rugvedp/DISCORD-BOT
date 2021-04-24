const Discord = require('discord.js');
module.exports = {
    name: 'unban',
    description: 'unban',
    async execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permission fool");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have ban permission");

        let reason = args.slice(1).join(" ");
        let userID = args[0];
        if (!reason) reason = 'No reason Given';
        if (!args[0]) return message.channel.send("You must staet someone to unban");
        if (isNaN(args[0])) return message.channel.send('The ID stated is not a number');

        message.guild.fetchBans().then(async bans => {
            if (bans.size == 0) return message.channel.send('This server does not have anyone banned');
            let bUser = bans.find(b => b.user.id == userID);
            if (!bUser) return message.channel.send('The user ID stated is not banned');

            await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err);
                return message.channel.send('Something went wrong');
            }).then(() => {
                message.channel.send(`Successfully unbanned ${args[0]}`);
            });
        });
    },
};
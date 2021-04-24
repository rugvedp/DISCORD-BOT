module.exports = {
    name: 'purge',
    description: 'Deleting messages in chat',
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MASSEGES")) return message.channel.send("You cannot use this command fool");
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't have \`MANAGE_MESSAGES` Permission");
        if (!args[0]) return message.channel.send("You must state how many message to purge");
        const ammountDelete = Number(args[0], 10);

        if (isNaN(ammountDelete)) return message.channel.send("Number stated is not valid umber");
        if (!Number.isInteger(ammountDelete)) return message.channel.send("Number must be a whole number");
        if (!ammountDelete || ammountDelete < 2 || ammountDelete > 5000) return message.channel.send("The number stated must be between 2 & 100");
        const fetched = await message.channel.messages.fetch({
            limit: ammountDelete
        });
        try {
            await message.channel.bulkDelete(fetched)
                .then(messages => message.channel.send(`Deleted ${messages.size} messages!`));

        } catch (err) {
            console.log(err);
            message.channel.send(`I was unable to delete the amount stated`);
        }
    },
};
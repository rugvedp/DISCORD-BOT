module.exports = {
    name: 'vote',
    description: 'Voting',
    async execute(message, args) {
        const filter = m => m.author.id == message.author.id;
        let embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setFooter(`Vote made by ${message.author.tag}`);

        message.channel.send('What is the vote topic');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embed.setTitle(msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('You ran out of time, Re-run command');
        }

        message.channel.send('What is first point to vote on');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embed.addField(`[🔴]`, msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('You ran out of time, Re-run command');
        }

        message.channel.send('What is second point to vote');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embed.addField(`[🔵]`, msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('You ran out of time, Re-run command');
        }
        message.channel.send(embed).then(sendMessage => sendMessage.react('🔴')).then(reaction => reaction.message.react('🔵'));
    },
};
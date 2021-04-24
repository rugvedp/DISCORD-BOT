module.exports = {
    name: 'say',
    description: 'Says message which is send by author',
    async execute(message, args) {
        const messageToSay = args.join(" ");
        const sayEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag} says: ${messageToSay}`)
            .setColor('RANDOM')
            .setTimestamp();

        try {
            message.channel.send(sayEmbed);
        } catch (err) {
            console.log(err);
            message.channel.send('I am not able to say that message');
        }
    },
};
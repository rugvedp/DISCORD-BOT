module.exports = {
    name: 'rust',
    description: 'rust!',
    async execute(message, args) {
        let role = message.member.guild.roles.cache.get('805837840780754974');
        message.channel.send(`${role} someone to play with me?`);
    },
};
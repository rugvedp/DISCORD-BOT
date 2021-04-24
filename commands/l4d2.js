module.exports = {
    name: 'l4d2',
    description: 'L4D2!',
    async execute(message, args) {
        let role = message.member.guild.roles.cache.get('805837740360335362');
        message.channel.send(`${role} someone to play with me?`);
    },
};
module.exports = {
    name: 'csgo',
    description: 'Ping all csgo players for playing csgo!',
    async execute(message, args) {
        let role = message.member.guild.roles.cache.get('805837686161932311');
        message.channel.send(`${role} someone to play with me?`)
    },
};
const Discord = require('discord.js');

module.exports = client => {
    client.on('guildMemberAdd', async (member) => {
        const ruleschannel = "CHannel ID HERE";
        const ammounment = "Channel ID HERE";
        const welcomechannel = "welcome Channel ID HERE";
        let embed = new Discord.MessageEmbed()
            .setTitle(`┃━━━COMMUNITY━━━┃`)
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`━─━─━─━─≪✠≫─━─━─━─━─
    😀 Hello <@${member.user.id}>. Welcome to Community
    ━─━─━─━─≪✠≫─━─━─━─━─
    ┏━━━━━━━━━━°❀•°🎗️🎗️°•°━━━➣
    ☛ First check ${ruleschannel} 
    ☛ Take your roles from ${roles} to get ping at giveaway
    ☛ Stay tuned in ${ammounment} for server updates
    ┗━━━━━━━━━━°❀•°🎗️🎗️°•°━━━➣`)
            .setColor('RANDOM')
            .setImage("https://media.tenor.com/images/43f0d78cce25b22b6b0a316b28ab929e/tenor.gif")
            .setTimestamp()
        await welcomechannel.send(embed);
    })
}
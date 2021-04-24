const Discord = require('discord.js');

module.exports = client => {
    client.on('guildMemberAdd', async (member) => {
        const welcomechannel = member.guild.channels.cache.get('823431783642038282');
        const ruleschannel = member.guild.channels.cache.get('805241859722969088');
        const ammounment = member.guild.channels.cache.get('805241859269197911');
        const roles = member.guild.channels.cache.get('805837596785639434');
        const continent = member.guild.channels.cache.get('824303505803837440');
        const giveaway = member.guild.channels.cache.get('805241859961651205');
        let embed = new Discord.MessageEmbed()
            .setAuthor(`┃━━━CG COMMUNITY━━━┃`, 'https://cdn.discordapp.com/icons/805241859252944967/a_6e3bedf49bc756344faa4d608d77a8a7.png?size=512')
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(`━─━─━─━─≪✠≫─━─━─━─━─
    😀 Hello <@${member.user.id}>. Welcome to CG Community
    ━─━─━─━─≪✠≫─━─━─━─━─
    ┏━━━━━━━━━━°❀•°🎗️🎗️°•°━━━➣
    ☛ First check ${ruleschannel} & ${giveaway}
    ☛ Take your roles from ${roles} & ${continent} to get ping at giveaway
    ☛ Stay tuned in ${ammounment} for server updates
    ┗━━━━━━━━━━°❀•°🎗️🎗️°•°━━━➣`)
            .setColor('RANDOM')
            .setImage("https://cdn.discordapp.com/attachments/822504274852446258/825209252867866635/ezgif.com-gif-maker_23.gif")
            .setTimestamp()
        await welcomechannel.send(embed);
    })
}
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'meme',
    description: 'Genrate meme like dank memer',
    async execute(message, args, client) {
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                const memeEmbed = new Discord.MessageEmbed()
                    .setTitle(json.title)
                    .setImage(json.url)
                    .setColor('RANDOM')
                    .setFooter(`${(json.subreddit)} ${(json.postLink)}`);

                let msg = await message.channel.send('Fetching meme....');
                msg.edit(memeEmbed)

            });
    },
};
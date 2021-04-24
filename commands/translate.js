const translate = require('@iamtraction/google-translate');
module.exports = {
    name: 'translate',
    description: 'Use this command for translate any word/sentence in english',
    async execute(message, args) {
        const query = args.join(" ");
        if (!query) return message.reply("Please specify something to translate");
        
        const processed = await translate(query, { to: 'en' });
        message.channel.send(processed.text);
    },
};
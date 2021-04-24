module.exports = {
    name: 'rps',
    description: 'Rock paper scissors game',
    async execute(message, args) {
        const botChoice = Math.floor(Math.random() * 2) + 1
        let botEmoji;
        let playerEmoji;
        let botChoiceString;
        
        if (!args[0]) return message.channel.send("You need to state your choice");
        if (!["rock", "paper", "scissors"].includes(args[0])) return message.channel.send("Your choice is not in the option");

        if (botChoice == 1) {
            botChoiceString = 'rock';
            botEmoji = ':rock: Rock';
        }
        if (botChoice == 2) {
            botChoiceString = 'paper';
            botEmoji = ':newspaper: Paper';
        }
        if (botChoice == 3) {
            botChoiceString = 'scissors';
            botEmoji = ':scissors: Scissors';
        }

        if (args[0] == 'rock') playerEmoji = ':rock: Rock';
        if (args[0] == 'paper') playerEmoji = ':newspaper: Paper';
        if (args[0] == 'scissors') playerEmoji = ':scissors: Scissors';

        if (botChoiceString == args[0]) return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji} We tied.`);

        if (args[0] == 'rock') {
            if (botChoiceString == 'paper') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lost.`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. I lost`);
        }


        if (args[0] == 'paper') {
            if (botChoiceString == 'scissors') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lost.`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. I lost`);
        }

        if (args[0] == 'scissors') {
            if (botChoiceString == 'rock') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lost.`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. I lost`);
        }
    },
};
module.exports = {
    name: 'calc',
    description: 'For calculating ',
    execute(message, args, client) {
        const firstValue = Number(args[0]);
        const seacondValue = Number(args[2]);

        if (!args[0]) return message.channel.send(`Use proper format ${client.prefix} calc number[+,-,*,/] number`)
        if (!firstValue) return message.channel.send('You must state first number');
        if (!args[1]) return message.channel.send('You have state what operation you have to do with another number');
        if (!['+', '-', '*', '/'].includes(args[1])) return message.channel.send('You must use proper sign');
        if (!seacondValue) return message.channel.send('You must state second number');

        if (args[1] == '+') {
            let result = firstValue + seacondValue;
            message.channel.send(`${firstValue} + ${seacondValue} = ${result}`);
        }

        if (args[1] == '-') {
            let result = firstValue - seacondValue;
            message.channel.send(`${firstValue} - ${seacondValue} = ${result}`);
        }

        if (args[1] == '*') {
            let result = firstValue * seacondValue;
            message.channel.send(`${firstValue} x ${seacondValue} = ${result}`);
        }

        if (args[1] == '/') {
            let result = firstValue / seacondValue;
            message.channel.send(`${firstValue} / ${seacondValue} = ${result}`);
        }
    },
};
module.exports = {
    args: true,
    usage: "<decimal number>",
    name: "octal",
    description: "convert decimal to octal",
    execute(message, args) {
        message.channel.send(parseInt(args[0]).toString(8).toUpperCase());
    },
};

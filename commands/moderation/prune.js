module.exports = {
    args: true,
    name: "prune",
    usage: "<number of messages to prune>",
    guildOnly: true,
    description: "prune messages (displays err on error)",
    permissions: "MANAGE_MESSAGES",
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.reply("Not a number.");
        } else if (amount <= 1 || amount > 99) {
            return message.reply(
                "You need to input a number between 1 and 99."
            );
        }
        message.channel.bulkDelete(amount, true).catch((err) => {
            message.channel.send(`${error}`);
        });
    },
};

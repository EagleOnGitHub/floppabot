module.exports = {
    args: true,
    name: "slow",
    usage: "<slowmode>",
    guildOnly: true,
    description: "set guild slowmode",
    permissions: "MANAGE_CHANNELS",
    execute(message, args) {
        let num = parseInt(args[0]);
        message.channel.setRateLimitPerUser(num);
        message.channel.send(
            num == 0 ? `Reset slowmode.` : `Set slowmode to ${num}.`
        );
    },
};

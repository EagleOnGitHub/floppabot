module.exports = {
    args: false,
    name: "time",
    aliases: ["utctime", "gmttime"],
    description: "get GMT/UTC time",
    execute(message, args) {
        message.channel.send(new Date().toUTCString());
    },
};

module.exports = {
    args: true,
    usage: "<text to interpret>",
    name: "text",
    description: "interpret text",
    execute(message, args) {
        message.channel.send("```" + args.join(" ") + "```");
    },
};

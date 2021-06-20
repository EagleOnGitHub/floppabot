const Uwuifier = require("uwuifier");

module.exports = {
    args: true,
    usage: "<text to uwuify>",
    name: "uwu",
    description: "uwuify text",
    execute(message, args) {
        const uwuifier = new Uwuifier();
        message.channel.send(uwuifier.uwuifySentence(args.join(" ")));
    },
};

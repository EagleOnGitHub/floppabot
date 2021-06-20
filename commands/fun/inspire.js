const fetch = require("node-fetch");

module.exports = {
    args: false,
    name: "inspire",
    description: "inspire yourself with the power of inspirobot",
    usage: "[number of images]",
    async execute(message, args) {
        try {
            let i;
            if (args.length > 0) {
                i = parseInt(args[0]);
            } else {
                i = 1;
            }
            let inspire;
            for (let _ = 0; _ < i; ++_) {
                inspire = await fetch(
                    "https://inspirobot.me/api?generate=true"
                ).then((textValue) => textValue.text());
                message.channel.send(inspire);
            }
        } catch (error) {
            message.channel.send(`${error}`);
        }
    },
};

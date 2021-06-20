const fetch = require("node-fetch");

module.exports = {
    args: false,
    name: "catr",
    description: "get images of cats from aws.random.cat/meow",
    async execute(message, args) {
        const { file } = await fetch("https://aws.random.cat/meow").then(
            (response) => response.json()
        );
        message.channel.send(file);
    },
};

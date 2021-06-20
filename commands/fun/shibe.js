const fetch = require("node-fetch");

module.exports = {
    args: false,
    name: "shibe",
    description: "images of shibes from shibe.online/api/shibes",
    async execute(message, args) {
        try {
            let img = await fetch("http://shibe.online/api/shibes").then(
                (response) => response.json()
            );
            const firstKey = Object.keys(img)[0];
            message.channel.send({ files: [img[firstKey]] });
        } catch (e) {
            message.channel.send(`${error}`);
        }
    },
};

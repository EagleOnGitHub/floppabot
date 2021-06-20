const fetch = require("node-fetch");

module.exports = {
    args: false,
    name: "bird",
    description: "images of birds from shibe.online/api/birds",
    async execute(message, args) {
        let img = await fetch("http://shibe.online/api/birds").then(
            (response) => response.json()
        );
        const firstKey = Object.keys(img)[0];
        message.channel.send({ files: [img[firstKey]] });
    },
};

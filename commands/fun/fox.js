const fetch = require("node-fetch");

module.exports = {
    args: false,
    name: "fox",
    description: "images of foxes from randomfox.ca/floof",
    async execute(message, args) {
        try {
            let img = await fetch("https://randomfox.ca/floof/").then(
                (response) => response.json()
            );
            message.channel.send({ files: [img.image] });
        } catch (e) {
            message.channel.send(`${error}`);
        }
    },
};

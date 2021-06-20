module.exports = {
    args: true,
    usage: "<http error code>",
    name: "httpcat",
    aliases: ["httpcats"],
    description: "get cat images of HTTP codes lol",
    execute(message, args) {
        message.channel.send(`https://http.cat/${args[0]}`);
    },
};

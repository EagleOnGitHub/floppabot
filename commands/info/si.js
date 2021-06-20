module.exports = {
    args: false,
    name: "si",
    guildOnly: true,
    description: "server info",
    aliases: ["serverinfo", "server-info", "sif"],
    execute(message, args) {
        message.channel.send(
            `Server name: ${message.guild.name}\nAmount of members: ${message.guild.memberCount}\nWhen was the server created: ${message.guild.createdAt}\nServer region: ${message.guild.region}`
        );
    },
};

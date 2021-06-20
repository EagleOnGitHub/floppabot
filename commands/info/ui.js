module.exports = {
    args: false,
    name: "ui",
    usage: "<optional user>",
    description: "user info",
    aliases: ["userinfo", "user-info", "uif"],
    execute(message, args) {
        if (args.length < 1) {
            return message.channel.send(
                `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
            );
        }
        const user = message.mentions.users.first();
        if (!user) {
            return message.channel.send("User does not exist.");
        }
        return message.channel.send(
            `${user.username}'s username: ${user.username}\n${user.username}'s ID: ${user.id}`
        );
    },
};

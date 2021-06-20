module.exports = {
    args: true,
    name: "ban",
    usage: "<user>",
    guildOnly: true,
    description: "ban user",
    permissions: "BAN_MEMBERS",
    async execute(message, args) {
        if (args.length < 1) {
            return message.reply("Please mention the user you want to ban.");
        }
        const reason = args.slice(1).join(" ");
        const user = message.mentions.users.first();
        try {
            await message.guild.members.ban(user.id, { reason });
        } catch (error) {
            return message.channel.send(`${error}`);
        }
        return message.channel.send(
            `Successfully banned ${user.tag} from the server!`
        );
    },
};

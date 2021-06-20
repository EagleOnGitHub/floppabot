const fs = require("fs");

module.exports = {
    name: "reload",
    description: "Reloads a command",
    aliases: ["rld"],
    execute(message, args) {
        if (!args.length)
            return message.channel.send(`No command to reload specified.`);
        const commandName = args[0].toLowerCase();
        const command =
            message.client.commands.get(commandName) ||
            message.client.commands.find(
                (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
            );

        if (!command)
            return message.channel.send(
                `No command with name or alias ${commandName}.`
            );
        const commandFolders = fs.readdirSync("./commands");
        const folderName = commandFolders.find((folder) =>
            fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`)
        );
        delete require.cache[
            require.resolve(`../${folderName}/${command.name}.js`)
        ];
        try {
            const newCommand = require(`../${folderName}/${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            message.channel.send(`${error}`);
        }
        message.channel.send(`Command \`${command.name}\` was reloaded.`);
    },
};

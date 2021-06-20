const clean = (text) => {
    if (typeof text === "string")
        return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
};

module.exports = {
    args: true,
    usage: "<code>",
    name: "eval",
    description: "evaluate JS code",
    execute(message, args) {
        if (message.author.id === "529381922955067412") {
            try {
                let code = args.join(" ");
                code = code.slice(5, -3);
                let evaled = eval(code);
                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);
                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }
    },
};

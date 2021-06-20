const fetch = require("node-fetch");
const Discord = require("discord.js");

const rhc = () => "#" + ((Math.random() * (1 << 24)) | 0).toString(16);
// monkey patch the xkcd.transcript issue
function fix(str) {
    if (str.length > 1024) {
        return str.slice(0, 1024 - 3) + "...";
    }
}

module.exports = {
    args: false,
    usage: "[optional xkcd comic number]",
    name: "xkcd",
    description: "get xkcd comic",
    async execute(message, args) {
        let comicNum;
        let xkcd;
        let xkcdEmbed;
        if (args.length == 0) {
            xkcd = await fetch("https://xkcd.com/info.0.json").then(
                (response) => response.json()
            );
            xkcdEmbed = new Discord.MessageEmbed()
                .setColor(rhc())
                .setTitle(xkcd.title)
                .addFields(
                    { name: "Title", value: xkcd.title, inline: true },
                    {
                        name: "Safe Title",
                        value: xkcd.safe_title,
                        inline: true,
                    },
                    { name: "Comic Number", value: xkcd.num, inline: true },
                    {
                        name: "News",
                        value: xkcd.news != "" ? xkcd.news : "N/A",
                        inline: true,
                    },
                    {
                        name: "Link",
                        value: xkcd.link != "" ? xkcd.link : "N/A",
                        inline: true,
                    },
                    {
                        name: "Date of Creation",
                        value:
                            xkcd.day +
                            "-" +
                            xkcd.month +
                            "-" +
                            xkcd.year +
                            " (dd-mm-yyyy)",
                        inline: true,
                    },
                    { name: "Alternate", value: xkcd.alt },
                    {
                        name: "Transcript",
                        value:
                            xkcd.transcript != ""
                                ? fix(xkcd.transcript)
                                : "N/A",
                    }
                )
                .setImage(xkcd.img);
            message.channel.send(xkcdEmbed);
        } else {
            comicNum = args[0];
            xkcd = await fetch(`https://xkcd.com/${comicNum}/info.0.json`).then(
                (response) => response.json()
            );
            xkcdEmbed = new Discord.MessageEmbed()
                .setColor(rhc())
                .setTitle(xkcd.title)
                .addFields(
                    { name: "Title", value: xkcd.title, inline: true },
                    {
                        name: "Safe Title",
                        value: xkcd.safe_title,
                        inline: true,
                    },
                    { name: "Comic Number", value: xkcd.num, inline: true },
                    {
                        name: "News",
                        value: xkcd.news != "" ? xkcd.news : "N/A",
                        inline: true,
                    },
                    {
                        name: "Link",
                        value: xkcd.link != "" ? xkcd.link : "N/A",
                        inline: true,
                    },
                    {
                        name: "Date of Creation",
                        value:
                            xkcd.day +
                            "-" +
                            xkcd.month +
                            "-" +
                            xkcd.year +
                            " (dd-mm-yyyy)",
                        inline: true,
                    },
                    { name: "Alternate", value: xkcd.alt },
                    {
                        name: "Transcript",
                        value:
                            xkcd.transcript != ""
                                ? fix(xkcd.transcript)
                                : "N/A",
                    }
                )
                .setImage(xkcd.img);
            message.channel.send(xkcdEmbed);
        }
    },
};

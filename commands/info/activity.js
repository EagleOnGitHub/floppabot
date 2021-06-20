const fetch = require("node-fetch");
const Discord = require("discord.js");

const vPrice = (a) => {
    if (a == 0) {
        return "Cheap/Free";
    } else if (a == 0.5) {
        return "Medium";
    } else if (a == 1) {
        return "Expensive/Very Expensive";
    } else {
        return a;
    }
};

const vAcc = (a) => {
    if (a == 0) {
        return "Accessible";
    } else if (a == 0.5) {
        return "Medium-ly Accessible";
    } else if (a == 1) {
        return "Barely Accessible";
    } else {
        return a;
    }
};

const rhc = () => "#" + ((Math.random() * (1 << 24)) | 0).toString(16);

module.exports = {
    args: false,
    name: "activity",
    description: "get a random activity to do from boredapi.com/api/activity",
    async execute(message, args) {
        let activity = await fetch(
            "https://www.boredapi.com/api/activity"
        ).then((response) => response.json());

        let activityEmbed = new Discord.MessageEmbed()
            .setColor(rhc())
            .setTitle("Activity")
            .addFields(
                { name: "Activity Type", value: activity.type, inline: true },
                {
                    name: "Participants",
                    value: activity.participants,
                    inline: true,
                },
                { name: "Activity Price", value: vPrice(activity.price) },
                { name: "Accessibility", value: vAcc(activity.accessibility) },
                { name: "Activity Key", value: activity.key },
                { name: "Activity", value: activity.activity },
                {
                    name: "Optional Information",
                    value:
                        activity.link != "" ? activity.link : "None provided",
                }
            );
        message.channel.send(activityEmbed);
    },
};

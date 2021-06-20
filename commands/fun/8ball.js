const rand = (array) => array[~~(Math.random() * array.length)];

const eightball = [
    "Never.",
    "Yes.",
    "No.",
    "Of course.",
    "Of course not.",
    "It isn't certain.",
    "What?",
    "It is certain.",
];

module.exports = {
    args: false,
    usage: "<whatever you want>",
    name: "8ball",
    aliases: ["8b"],
    description: "8ball. how do you not know an 8ball",
    execute(message, args) {
        message.channel.send(rand(eightball));
    },
};

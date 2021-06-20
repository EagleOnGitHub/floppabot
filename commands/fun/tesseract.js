const Tesseract = require("tesseract.js");

module.exports = {
    args: false,
    usage: "<the image>",
    name: "tesseract",
    description: "use tesseract to get text from an image",
    execute(message, args) {
        try {
            if (args.length < 1) {
                Tesseract.recognize(
                    message.attachments.array()[0].url,
                    "eng"
                ).then(({ data: { text } }) => {
                    message.channel.send(text);
                });
            } else {
                Tesseract.recognize(args[0], "eng").then(
                    ({ data: { text } }) => {
                        message.channel.send(text);
                    }
                );
            }
        } catch (error) {
            return message.channel.send(`${error}`);
        }
    },
};

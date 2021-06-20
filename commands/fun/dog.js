const querystring = require("querystring");
const r2 = require("r2");
const config = require("../../config.json");

async function loadImageDog(breeds, sub_id) {
    let response;
    let headers = {
        "X-API-KEY": config.dog_api_key,
    };
    let query_params = {
        has_breeds: breeds,
        mime_types: "jpg,png,jpeg,webp,gif",
        size: "small",
        sub_id: sub_id,
        limit: 1,
    };
    const queryString = querystring.stringify(query_params);
    try {
        const _url =
            "https://api.thedogapi.com/" + `v1/images/search?${queryString}`;
        response = await r2.get(_url, {
            headers,
        }).json;
    } catch (e) {
        message.channel.send(`${e}`);
    }
    return response;
}

module.exports = {
    name: "dog",
    description: "dogs from TheDogAPI without breed",
    async execute(message, args) {
        try {
            let images = await loadImageDog(false, message.author.username);
            let image = images[0];
            message.channel.send({ files: [image.url] });
        } catch (e) {
            message.channel.send(`${e}`);
        }
    },
};

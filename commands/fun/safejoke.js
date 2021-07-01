const fetch = require('node-fetch')
const Discord = require('discord.js')

const yn = (a) => (a ? 'Yes' : 'No')
const rhc = () => '#' + ((Math.random() * (1 << 24)) | 0).toString(16)

module.exports = {
  args: false,
  name: 'safejoke',
  description:
        'a joke from v2.jokeapi.dev/joke/Any?safe-mode aka a safe joke',
  async execute (message, args) {
    const joke = await fetch(
      'https://v2.jokeapi.dev/joke/Any?safe-mode'
    ).then((response) => response.json())
    let jokeEmbed
    if ('setup' in joke) {
      jokeEmbed = new Discord.MessageEmbed()
        .setColor(rhc())
        .setTitle('Joke')
        .addFields(
          { name: 'Error?', value: joke.error, inline: true },
          { name: 'Category', value: joke.category, inline: true },
          { name: 'Type of Joke', value: joke.type, inline: true },
          { name: 'NSFW?', value: yn(joke.flags.nsfw), inline: true },
          {
            name: 'Religious?',
            value: yn(joke.flags.religious),
            inline: true
          },
          {
            name: 'Political?',
            value: yn(joke.flags.political),
            inline: true
          },
          {
            name: 'Racist?',
            value: yn(joke.flags.racist),
            inline: true
          },
          {
            name: 'Sexist?',
            value: yn(joke.flags.sexist),
            inline: true
          },
          {
            name: 'Explicit?',
            value: yn(joke.flags.explicit),
            inline: true
          },
          { name: 'Safe?', value: yn(joke.safe), inline: true },
          { name: 'Joke ID', value: joke.id, inline: true },
          { name: 'Language', value: joke.lang, inline: true },
          { name: 'Setup', value: joke.setup },
          { name: 'Delivery', value: joke.delivery }
        )
    } else {
      jokeEmbed = new Discord.MessageEmbed()
        .setColor(rhc())
        .setTitle('Joke')
        .addFields(
          { name: 'Error?', value: joke.error, inline: true },
          { name: 'Category', value: joke.category, inline: true },
          { name: 'Type of Joke', value: joke.type, inline: true },
          { name: 'NSFW?', value: yn(joke.flags.nsfw), inline: true },
          {
            name: 'Religious?',
            value: yn(joke.flags.religious),
            inline: true
          },
          {
            name: 'Political?',
            value: yn(joke.flags.political),
            inline: true
          },
          {
            name: 'Racist?',
            value: yn(joke.flags.racist),
            inline: true
          },
          {
            name: 'Sexist?',
            value: yn(joke.flags.sexist),
            inline: true
          },
          {
            name: 'Explicit?',
            value: yn(joke.flags.explicit),
            inline: true
          },
          { name: 'Safe?', value: yn(joke.safe), inline: true },
          { name: 'Joke ID', value: joke.id, inline: true },
          { name: 'Language', value: joke.lang, inline: true },
          { name: 'Joke', value: joke.joke }
        )
    }
    message.channel.send(jokeEmbed)
  }
}

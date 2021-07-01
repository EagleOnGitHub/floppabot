const fetch = require('node-fetch')
const querystring = require('querystring')
const Discord = require('discord.js')

const trim = (str, max) =>
  str.length > max ? `${str.slice(0, max - 3)}...` : str
const rhc = () => '#' + ((Math.random() * (1 << 24)) | 0).toString(16)

module.exports = {
  args: true,
  usage: '<word to search>',
  name: 'urban',
  aliases: ['u'],
  description: 'search the urban dictionary',
  async execute (message, args) {
    if (!args.length) {
      return message.channel.send('Supply a search term.')
    }
    const query = querystring.stringify({ term: args.join(' ') })
    const { list } = await fetch(
            `https://api.urbandictionary.com/v0/define?${query}`
    ).then((response) => response.json())
    if (!list) {
      return message.channel.send(
                `No results found for **${args.join(' ')}**.`
      )
    }
    const [answer] = list
    const embed = new Discord.MessageEmbed()
      .setColor(rhc())
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addFields(
        { name: 'Definition', value: trim(answer.definition, 1024) },
        { name: 'Example', value: trim(answer.example, 1024) },
        {
          name: 'Rating',
          value: `${answer.thumbs_up} :thumbsup: ${answer.thumbs_down} :thumbsdown:`
        }
      )
    message.channel.send(embed)
  }
}

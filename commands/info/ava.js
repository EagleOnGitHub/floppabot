const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
  args: false,
  name: 'ava',
  usage: '<optional user>',
  aliases: ['pfp', 'icon', 'avatar'],
  description: 'get avatar',
  execute (message, args) {
    if (args[0]) {
      const user = message.mentions.users.first()
      if (!user) {
        return message.reply('Mention somebody that exists.')
      }
      return message.channel.send(
                `${user.username}'s avatar is: ${user.displayAvatarURL({
                    dynamic: true,
                    format: 'png'
                })}`
      )
    }
    return message.channel.send(
            `${
                message.author.username
            }, Your avatar is: ${message.author.displayAvatarURL({
                dynamic: true,
                format: 'png'
            })}`
    )
  }
}

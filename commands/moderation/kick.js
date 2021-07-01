module.exports = {
  args: true,
  name: 'kick',
  usage: '<user to kick> <reason>',
  guildOnly: true,
  description: 'kick user',
  permissions: 'KICK_MEMBERS',
  execute (message, args) {
    const user = message.mentions.members.first()
    if (!user) {
      return message.reply('User does not exist.')
    }
    user.kick()
      .then((member) => {
        return message.reply(
                    `Successfully kicked ${member.displayName}`
        )
      })
      .catch((err) => {
        message.channel.send(`${err}`)
      })
  }
}

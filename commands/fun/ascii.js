const figlet = require('figlet')

module.exports = {
  args: true,
  usage: '<text>',
  name: 'ascii',
  description: 'ascii-fy text using figlet',
  execute (message, args) {
    figlet.text(args.join(''), function (err, data) {
      if (err) {
        return message.channel.send(`${err}`)
      }
      if (data.length > 2000) {
        return message.channel.send(
          'Please provide text that when generated is shorter than 2000 characters.'
        )
      }
      message.channel.send(
        data.length != 0
          ? '```' + data + '```'
          : 'Generated text is empty.'
      )
    })
  }
}

const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'shibe',
  description: 'images of shibes from shibe.online/api/shibes',
  async execute (message, args) {
    try {
      const img = await animals.shibe()
      message.channel.send({ files: [img] })
    } catch (error) {
      message.channel.send(`${error}`)
    }
  }
}

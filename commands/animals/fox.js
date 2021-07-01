const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'fox',
  description: 'images of foxes from randomfox.ca/floof',
  async execute (message, args) {
    try {
      const img = await animals.fox()
      message.channel.send(img)
    } catch (error) {
      message.channel.send(`${error}`)
    }
  }
}

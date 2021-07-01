const animals = require('../../helper/animals')

module.exports = {
  name: 'dog',
  description: 'dogs from TheDogAPI without breed',
  async execute (message, args) {
    try {
      const dog = await animals.dog(false, message.author.username)
      message.channel.send({ files: [dog[0].url] })
    } catch (e) {
      message.channel.send(`${e}`)
    }
  }
}

const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'catp',
  description: 'get cats from TheCatAPI without breed',
  async execute (message, args) {
    try {
      const cat = await animals.cat(false, message.author.username)
      message.channel.send({ files: [cat[0].url] })
    } catch (e) {
      message.channel.send(`${e}`)
    }
  }
}

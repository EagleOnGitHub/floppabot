const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'bird',
  description: 'images of birds from shibe.online/api/birds',
  async execute (message, args) {
    const img = await animals.bird()
    message.channel.send({ files: [img] })
  }
}

const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'catr',
  description: 'get images of cats from aws.random.cat/meow',
  async execute (message, args) {
    message.channel.send(await animals.cat2())
  }
}

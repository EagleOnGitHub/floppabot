const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'dogb',
  description: 'get images of dogs from TheDogAPI with their breed',
  async execute (message, args) {
    try {
      const dog = await animals.dog(true, message.author.username)
      const image = dog[0]
      const breed = image.breeds[0]
      message.channel.send('**Breed: ' + breed.name + '**', {
        files: [image.url]
      })
    } catch (e) {
      message.channel.send(`${e}`)
    }
  }
}

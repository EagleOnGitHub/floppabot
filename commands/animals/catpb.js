const animals = require('../../helper/animals')

module.exports = {
  args: false,
  name: 'catpb',
  description: 'cat images from TheCatAPI with breed type',
  async execute (message, args) {
    try {
      const cat = await animals.cat(true, message.author.username)
      const image = cat[0]
      const breed = image.breeds[0]
      message.channel.send('**Breed: ' + breed.name + '**', {
        files: [image.url]
      })
    } catch (e) {
      message.channel.send(`${e}`)
    }
  }
}

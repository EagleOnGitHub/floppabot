const Tesseract = require('tesseract.js')
const imageHelpers = require('../../helper/images.js')

module.exports = {
  args: false,
  usage: '<the image>',
  name: 'tesseract',
  description: 'use tesseract to get text from an image',
  execute (message, args) {
    try {
      imageHelpers.attachmentHandling(message, args, (url) => {
        Tesseract.recognize(
          url,
          'eng'
        ).then(({ data: { text } }) => {
          message.channel.send(text)
        })
      })
    } catch (error) {
      return message.channel.send(`${error}`)
    }
  }
}

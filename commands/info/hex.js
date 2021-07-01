module.exports = {
  args: true,
  usage: '<decimal number>',
  name: 'hex',
  description: 'convert decimal to hex',
  execute (message, args) {
    message.channel.send(parseInt(args[0]).toString(16).toUpperCase())
  }
}

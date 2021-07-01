module.exports = {
  attachmentHandling: function (message, args, toExecute) {
    let url
    if (args.length < 1) url = message.attachments.array()[0].url
    else if (args.length > 0) url = args[0]
    toExecute(url)
  }
}

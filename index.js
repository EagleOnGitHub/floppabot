const fs = require('fs')
const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const intents = new Discord.Intents(Discord.Intents.ALL)
const client = new Discord.Client({ ws: { intents: intents } })
client.commands = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')
const cooldowns = new Discord.Collection()

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`)
    client.commands.set(command.name, command)
  }
}

client.once('ready', async () => {
  const servers = await client.guilds.cache.size
  const users = await client.users.cache.size
  console.log('bot online')
  client.user.setActivity(`${servers} servers (${users} users).`, {
    type: 'LISTENING'
  })
})

client.on('message', async message => {
  if (message.author.bot) return
  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const commandName = args.shift().toLowerCase()
  if (!message.content.startsWith(prefix.toLowerCase())) return
  if (!client.commands.has(commandName)) return
  const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
  if (!command) return
  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('That command cannot be used in DMs.')
  }
  if (command.permissions) {
    const authorPerms = message.channel.permissionsFor(message.author)
    if (!authorPerms || !authorPerms.has(command.permissions)) {
      return message.reply("You don't have the permissions nessecary for that command.")
    }
  }
  if (command.args && !args.length) {
    let reply = 'That command requires arguments.'
    if (command.usage) {
      reply += `\nThe proper usage would be \`${prefix}${command.name} ${command.usage}\`.`
    }
    return message.channel.send(reply)
  }
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection())
  }
  const now = Date.now()
  const timestamps = cooldowns.get(command.name)
  const cooldownAmount = (command.cooldown || 3) * 1000
  if (timestamps.has(message.author.id)) {
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000
        return message.reply(`Please wait ~${timeLeft} more second(s) before reusing the \`${command.name}\` command.`)
      }
    }
  }
  timestamps.set(message.author.id, now)
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
  try {
    command.execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply('Error trying to execute that command.')
  }
})

client.login(token)
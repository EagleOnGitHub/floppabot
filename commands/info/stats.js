const os = require('os')
const Discord = require('discord.js')
const semver = require('semver')

const rhc = () => '#' + ((Math.random() * (1 << 24)) | 0).toString(16)

module.exports = {
  args: false,
  name: 'stats',
  aliases: ['8b'],
  description: 'get bot stats and shit',
  execute (message, args) {
    try {
      const versions = process.versions
      const usedmem = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
      const totalmem = os.totalmem() / 1024 / 1024 / 1024
      const freemem = os.freemem() / 1024 / 1024 / 1024
      const memper = (usedmem / totalmem) * 100 + '%'
      const hostname = os.hostname()
      const statsEmbed = new Discord.MessageEmbed()
        .setColor(rhc())
        .setTitle('Bot Stats')
        .addFields(
          {
            name: 'Used Memory',
            value: usedmem + ' GB',
            inline: true
          },
          {
            name: 'Total Memory',
            value: totalmem + ' GB',
            inline: true
          },
          {
            name: 'Free Memory',
            value: freemem + ' GB',
            inline: true
          },
          { name: 'Usage Percentage', value: memper, inline: true },
          { name: 'Hostname', value: hostname, inline: true },
          {
            name: 'Node',
            value: semver.clean(versions.node),
            inline: true
          },
          { name: 'v8', value: versions.v8, inline: true },
          {
            name: 'Uv',
            value: semver.clean(versions.uv),
            inline: true
          },
          {
            name: 'zlib',
            value: semver.clean(versions.zlib),
            inline: true
          },
          {
            name: 'Brotli',
            value: semver.clean(versions.brotli),
            inline: true
          },
          {
            name: 'Ares',
            value: semver.clean(versions.ares),
            inline: true
          },
          { name: 'Modules', value: versions.modules, inline: true },
          {
            name: 'nghttp2',
            value: semver.clean(versions.nghttp2),
            inline: true
          },
          { name: 'napi', value: versions.napi, inline: true },
          {
            name: 'llhttp',
            value: semver.clean(versions.llhttp),
            inline: true
          },
          { name: 'cldr', value: versions.cldr, inline: true },
          { name: 'icu', value: versions.icu, inline: true },
          { name: 'tz', value: versions.tz, inline: true },
          { name: 'Unicode', value: versions.unicode, inline: true },
          {
            name: 'Uptime',
            value: message.client.uptime + ' ms',
            inline: true
          }
        )
      message.channel.send(statsEmbed)
    } catch (error) {
      message.channel.send(`${error}`)
    }
  }
}

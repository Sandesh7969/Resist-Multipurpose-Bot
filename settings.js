const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=${}&permissions=8&scope=bot%20applications.commands',
      privacy: 'https://discord.gg/codersplanet',
      terms: 'https://discord.gg/codersplanet',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/axo'
    },
    credits: {
      developerId: '1219309281011171390',
      supportServer: 'https://discord.gg/codersplanet'
    },
  }
}

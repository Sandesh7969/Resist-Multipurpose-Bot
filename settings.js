const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=${}&permissions=8&scope=bot%20applications.commands',
      privacy: 'https://discord.gg/GPzYFx7zfe',
      terms: 'https://discord.gg/GPzYFx7zfe',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/supreme'
    },
    credits: {
      developerId: '1131953433134497923',
      supportServer: 'https://discord.gg/GPzYFx7zfe'
    },
  }
}

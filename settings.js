const prefix = process.env.prefix || '?'
const status = `${prefix}help`;

module.exports = {
  bot: {
    info: {
      prefix: '?',
      token: '',
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=&permissions=8&scope=bot%20applications.commands',
      privacy: 'https://github.com/AryptonXD/Resist/blob/main/ResistPrivacyPolicy.md',
      terms: 'https://github.com/AryptonXD/Resist/blob/main/ResistTermsAndConditions.md',
    },
    presence: {
      name: status,
      type: 'LISTENING',
      url: 'https://twitch.tv/teamkronix'
    },
    credits: {
      developerId: '1219309281011171390',
      supportServer: 'https://discord.gg/teamkronix'
    },
  }
}

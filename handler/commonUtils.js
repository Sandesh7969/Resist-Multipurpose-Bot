const { MessageEmbed } = require("discord.js");

const createEmbed = (client, ID, added, allGuilds) => {
  const description = added
    ? `TK | ${added} no prefix to <@${ID}> for ${allGuilds ? 'all guilds' : 'this guild'}`
    : `TK | Already ${added ? 'added' : 'removed'} no prefix to <@${ID}> for ${allGuilds ? 'all guilds' : 'this guild'}`;

  return new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(description);
};

module.exports = { createEmbed };

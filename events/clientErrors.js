const { WebhookClient } = require('discord.js');
const client = require('../index.js');
const config = require('./../config.json');

const webhookClient = new WebhookClient({
  id: config.webhook_id,
  token: config.webhook_token
});

client.on('error', (error) => {
  handleError(error);
});

process.on('uncaughtException', (error) => {
  handleError(error);
});

process.on('unhandledRejection', (reason, promise) => {
  handleError(reason);
});

async function handleError(error) {
  const errorMessage = error instanceof Error ? error.stack || error.toString() : JSON.stringify(error);
  await sendErrorMessage(errorMessage);
}

async function sendErrorMessage(errorMessage) {
  try {
    await webhookClient.send(errorMessage);
  } catch (error) {
    console.error('Failed to send error message:', error);
  }
}

/* eslint require-atomic-updates: off */

const prepareJiraList = require('./lib/prepare');

async function verifyConditions() {
  // Nothing to verify, just a placeholder
}

async function prepare(pluginConfig, context) {
  await prepareJiraList(pluginConfig, context);
}

module.exports = {verifyConditions, prepare};

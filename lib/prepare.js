const path = require('path');
const {writeFile, ensureFile} = require('fs-extra');

module.exports = async (pluginConfig, {cwd, commits, logger}) => {
  const jiraListFile = 'jira-list';
  const jiraListFilePath = path.resolve(cwd, jiraListFile);

  await ensureFile(jiraListFilePath);

  const content = commits
    .map(({message}) => message.match(/([A-Z][A-Z0-9]+-[0-9]{1,10})/g) || [''])
    .map(arr => arr[0])
    .filter(id => id > '')
    .reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
    .join(',');

  logger.log('writing into jira-list file: %s, content: %s', jiraListFilePath, content);

  await writeFile(jiraListFilePath, content);
};

const path = require('path');
const {writeFile, ensureFile} = require('fs-extra');

module.exports = async (pluginConfig, {cwd, commits, logger}) => {
  const jiraListFile = 'jira-list';
  const jiraListFilePath = path.resolve(cwd, jiraListFile);

  await ensureFile(jiraListFilePath);

  const content = commits
    .map(({message}) => message.match(/([A-Z]{2,7}-[0-9]{1,10})/g) || [''])
    .filter(id => id > '')
    .map(id => '"' + id + '"')
    .join(',');

  logger.log('writing into jira-list file: %s, content: %s', jiraListFilePath, content);

  await writeFile(jiraListFilePath, content);
};

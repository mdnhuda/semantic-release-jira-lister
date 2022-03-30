const path = require('path');
const test = require('ava');
const {readFile} = require('fs-extra');
const {stub} = require('sinon');
const clearModule = require('clear-module');
const tempy = require('tempy');

test.beforeEach(t => {
  // Clear npm cache to refresh the module state
  clearModule('..');
  t.context.m = require('..');
  // Stub the logger
  t.context.log = stub();
  t.context.logger = {log: t.context.log};
});

test.serial('Create new jira-list file', async t => {
  const cwd = tempy.directory();
  const jiraListFile = 'jira-list';
  const jiraListFilePath = path.resolve(cwd, jiraListFile);
  const commits = [
    {hash: '123', message: 'TEST-1 First commit'},
    {hash: '124', message: '[TEST-2] Second commit'},
    {hash: '124', message: '[TESTINGAVERYLONGPROJECTNAME-123456789] Second commit'},
    {hash: '456', message: 'feat: new features'},
  ];
  await t.context.m.prepare({}, {cwd, commits, logger: t.context.logger});

  // Verify the content of the CHANGELOG.md
  t.is((await readFile(jiraListFilePath)).toString(), `TEST-1,TEST-2,TESTINGAVERYLONGPROJECTNAME-123456789`);
});

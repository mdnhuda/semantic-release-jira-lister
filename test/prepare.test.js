const path = require('path');
const test = require('ava');
const {readFile} = require('fs-extra');
const {stub} = require('sinon');
const tempy = require('tempy');
const prepare = require('../lib/prepare');

test.beforeEach(t => {
  // Stub the logger
  t.context.log = stub();
  t.context.logger = {log: t.context.log};
});

test('Create new CHANGELOG.md', async t => {
  const cwd = tempy.directory();
  const jiraListFile = 'jira-list';
  const jiraListFilePath = path.resolve(cwd, jiraListFile);
  const commits = [
    {hash: '123', message: 'TEST-1 First commit'},
    {hash: '124', message: '[TEST-2] Second commit'},
    {hash: '456', message: 'feat: new features'},
  ];

  await prepare({}, {cwd, commits, logger: t.context.logger});

  // Verify the content of the CHANGELOG.md
  t.is((await readFile(jiraListFilePath)).toString(), `"TEST-1","TEST-2"`);
});

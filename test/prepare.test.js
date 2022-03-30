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

test('Create new jira-list file', async t => {
  const cwd = tempy.directory();
  const jiraListFile = 'jira-list';
  const jiraListFilePath = path.resolve(cwd, jiraListFile);
  const commits = [
    {hash: '123', message: 'TEST-1 First commit'},
    {hash: '124', message: '[TEST-2] Second commit'},
    {hash: '125', message: 'TEST-2 Second commit 2'},
    {hash: '125', message: 'TESTINGAVERYLONGPROJECTNAME-123456789 Second commit 2'},
    {hash: '234', message: 'B2B-201 business to business commit'},
    {hash: '456', message: 'feat: [TEST-3] new features'},
  ];

  await prepare({}, {cwd, commits, logger: t.context.logger});

  // Verify the content of the file created, only unique jira IDs will be kept
  t.is((await readFile(jiraListFilePath)).toString(), `TEST-1,TEST-2,TESTINGAVERYLONGPROJECTNAME-123456789,B2B-201,TEST-3`);
});

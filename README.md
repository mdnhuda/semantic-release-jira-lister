# semantic-release-jira-lister

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to create a file extracting the Jira ticket numbers from the commit messages.
The expected commit message format:

```
feat: [TEST-345] Added yet another page
[TEST-234] Minor change to another page
[TEST-234] Added another page
TEST-123 Added new page
```




The `jira-list` file's content would be `TEST-345,TEST-234,TEST-123`

[![Travis](https://img.shields.io/travis/semantic-release/changelog.svg)](https://travis-ci.org/semantic-release/changelog)
[![Codecov](https://img.shields.io/codecov/c/github/semantic-release/changelog.svg)](https://codecov.io/gh/semantic-release/changelog)
[![Greenkeeper badge](https://badges.greenkeeper.io/semantic-release/changelog.svg)](https://greenkeeper.io/)

[![npm latest version](https://img.shields.io/npm/v/@semantic-release/changelog/latest.svg)](https://www.npmjs.com/package/@semantic-release/changelog)
[![npm next version](https://img.shields.io/npm/v/@semantic-release/changelog/next.svg)](https://www.npmjs.com/package/@semantic-release/changelog)

| Step               | Description                                                                                                                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `verifyConditions` | Does nothing now.                                                                                                                                |
| `prepare`          | Creating a file 'jira-list' in local project directory. |

## Install

```bash
$ npm install semantic-release-jira-lister -D
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",    
    "semantic-release-jira-lister"
  ]
}
```

With this example, for each release, a 'jira-list' file will be created or updated.


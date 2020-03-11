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

https://www.npmjs.com/package/semantic-release-jira-lister

---------

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


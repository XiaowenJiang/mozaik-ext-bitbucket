# Mozaïk bitbucket widgets

![widget count][widget-count-image]

## Bitbucket Client Configuration

In order to use the Mozaïk weather widgets, you **must** configure its **client**.

### parameters

key     | env key           | required | description
--------|-------------------|----------|-----------------------------------
`baseUrl` | BITBUCKET_API_BASE_URL | yes | *bitbucket website base url*
`basicAuthUser` | BITBUCKET_API_BASIC_AUTH_USER | yes | *bitbucket username*
`basicAuthKey` | BITBUCKET_API_BASIC_AUTH_PASSWORD | yes | *bitbucket key generated from personal account*

#### using `config.js`

```javascript
{
  //…
  api: {
    bitbucket: {
      baseUrl: 'your_url',
      basicAuthUser: 'username',
      basicAuthKey: 'auth_key'
    }
  }
}
```

#### using environment variable

Simply set **BITBUCKET_API_BASE_URL** env variable, using `.env` or manually.

## Bitbucket Pull Requests

> Show a list of pull requests in certain repository


### parameters

key       | required | description
----------|----------|----------------------------------------------------
`project` | yes      | *bitbucket project name*
`repo`    | yes      | *bitbucket repository's name*

### usage

```javascript
  {
      type: 'bitbucket.pull_requests',
      project: 'project_name',
      repo: 'repo_name',
      columns: 1, rows: 1,
      x: 2, y: 1
  }
```

[widget-count-image]: https://img.shields.io/badge/widgets-x1-green.svg?style=flat-square
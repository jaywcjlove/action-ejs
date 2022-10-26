Action EJS
===

[![CI](https://github.com/jaywcjlove/action-ejs/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/action-ejs/actions/workflows/ci.yml)
[![TEST](https://github.com/jaywcjlove/action-ejs/actions/workflows/test.yml/badge.svg)](https://github.com/jaywcjlove/action-ejs/actions/workflows/test.yml)

A github action to render a [`ejs`](https://github.com/mde/ejs) template using github context

## Usage

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template: <h1><%= name %> <span><%= conclusion %></span></h1>
    vars: |
      { "name": "${{ github.repository }}", "conclusion": "${{ steps.ejs.conclusion }}" }
```

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template: <div><%= LICENSE %></div><div><%= markdown %></div>
    output: build/demo.html
    vars-file: |
      {
        "markdown": "./README.md",
        "LICENSE": "./LICENSE"
      }
```

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template-file: template/demo.html
    output: build/template/demo.html
    vars: |
      { "htmlContent": "${{ env.GITHUB_REF }}" }
```

Following objects are exposed, and can be used in template file:

- `context`: The [Context](https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts) object in [@actions/github](https://github.com/actions/toolkit/tree/main/packages/github)
- `process`: The `process.env` object. You can access the environment variables with `env.<key>`

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template: |
      <h1><%= env.GITHUB_REF %></h1> commiter: <%= context.payload.head_commit.author.name %>
```

## Inputs

- `template` Input ESJ template string.
- `template-file` Input ESJ template file path.
- `vars` Input variables. A dictionary of variables in JSON format to be used in the template. `default: '{}'`
- `vars-file` Read the contents of the file into a `vars`. `default: '{}'`
- `options` A JSON format string of options to be passed to the template engine. `default: '{}'`
- `output` output html path `default: build/index.html`

## Outputs

- `content` template render result: `<!DOCTYPE html><html lang="en">....`.

## See Also

- [Github Release Changelog Generator](https://github.com/jaywcjlove/changelog-generator) A GitHub Action that compares the commit differences between two branches
- [Create Tags From](https://github.com/jaywcjlove/create-tag-action) Auto create tags from commit or package.json.
- [Github Action Contributors](https://github.com/jaywcjlove/github-action-contributors) Github action generates dynamic image URL for contributor list to display it!
- [Generated Badges](https://github.com/jaywcjlove/generated-badges) Create a badge using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers)
- [Create Coverage Badges](https://github.com/jaywcjlove/coverage-badges-cli) Create coverage badges from coverage reports. (no 3rd parties servers)
- [Github Action package](https://github.com/jaywcjlove/github-action-package) Read and modify the contents of `package.json`.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/action-ejs/graphs/contributors">
  <img src="https://jaywcjlove.github.io/action-ejs/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.

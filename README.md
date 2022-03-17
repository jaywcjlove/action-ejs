Action EJS
===

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

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template-file: template/demo.html
    output: build/template/demo.html
    vars: |
      { "htmlContent": "${{ env.GITHUB_REF }}" }
```

## Inputs

- `template` Input ESJ template string.
- `template-file` Input ESJ template file path.
- `vars` Input variables. A dictionary of variables in JSON format to be used in the template. `default: '{}'`
- `options` A JSON format string of options to be passed to the template engine. `default: '{}'`
- `output` output html path `default: build/index.html`

## Outputs

- `content` template render result: `<!DOCTYPE html><html lang="en">....`.

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/action-ejs/graphs/contributors">
  <img src="https://jaywcjlove.github.io/action-ejs/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.

Action EJS
===

A github action to render a [`ejs`](https://github.com/mde/ejs) template using github context

## Usage

```yml
- name: action-ejs
  uses: jaywcjlove/action-ejs@main
  with:
    template: |
      <%= name %>
    vars: |
      { "name": "${{ steps.<stepId>.outputs.name }}" }
```

Following objects are exposed, and can be used in template file:

- `context`: The [Context](https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts) object in [@actions/github](https://github.com/actions/toolkit/tree/main/packages/github)
- `process`: The `process.env` object. You can access the environment variables with `process.env.<key>`

## Inputs

- `token` - Your `GITHUB_TOKEN`. This is required. Why do we need `token`? Read more here: [About the GITHUB_TOKEN secret](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret). Default: `${{ github.token }}`

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

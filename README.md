# RubyLLM Docs Site

This repository contains the standalone Jekyll site for the RubyLLM documentation and marketing homepage. It is the shareable docs repo that can be reviewed independently from the main RubyLLM application codebase.

## Local Development

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://127.0.0.1:4000`.

## GitHub Pages

The site deploys from `.github/workflows/pages.yml`.

- Pushes to `main` build the site and deploy it to GitHub Pages.
- The workflow uses `actions/configure-pages` to detect the correct Pages base path, so project Pages repos like `https://<user>.github.io/<repo>/` work without hardcoding `baseurl`.
- Built output is uploaded from `_site` and deployed with the standard GitHub Pages Actions flow.

## Key Paths

- `index.md`: homepage content
- `_config.yml`: site metadata and theme configuration
- `_data/navigation.yml`: top-level navigation
- `_data/sidebar.yml`: sidebar structure
- `assets/css/rubyllm-overrides.css`: site-specific styling overrides

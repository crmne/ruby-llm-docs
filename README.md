# Jekyll VitePress Theme Clone

This repository contains a Jekyll docs site/theme that closely reproduces the default VitePress look and layout:

- VitePress 2.0 default CSS variables, typography, component styling, and icons.
- VitePress-style top nav, mobile nav screen, left sidebar, right-page outline, and doc footer pager.
- Light/dark appearance toggle with `auto -> dark -> light` cycling.
- Collapsible sidebar sections, mobile menu behavior, heading anchor links, and scroll-synced outline highlighting.
- Working search (`/`, `Ctrl/Cmd+K`) backed by generated `search.json`.
- Rouge code block styling with light/dark syntax colors.

## Local Development

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://127.0.0.1:4000`.

## Notes

- Real docs content was copied from `~/Work/ruby_llm/docs` into this repository for testing, without modifying that source repo.
- VitePress theme assets were sourced from `vitepress@2.0.0-alpha.16` and adapted for Jekyll templates.
- Header branding follows VitePress behavior under `jekyll_vitepress.branding.logo`, and set `jekyll_vitepress.branding.site_title: false` to show logo-only branding.
- Set `layout: home` in front matter to render a VitePress-like home page without sidebar/local nav.
- Theme-aware images are supported with `.light` / `.dark` (or `.only-light` / `.only-dark`) classes.
- Appearance follows system theme by default (`auto`), and the toggle cycles `auto -> dark -> light -> auto` (Alt/Option-click resets to `auto`).

Home frontmatter supports VitePress-style keys:

```yml
layout: home
hero:
  name: RubyLLM
  text: One beautiful API for AI in Ruby
  tagline: Build docs in minutes
  image:
    src: /assets/images/logo.svg
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
features:
  - icon: 💬
    title: Unified Chat API
    details: One interface across providers.
    link: /chat/
```

## Theme Config

`_config.yml` exposes theme behavior under `jekyll_vitepress`:

```yml
jekyll_vitepress:
  branding:
    site_title: RubyLLM
    logo:
      default: /assets/images/logo.svg
      light: /assets/images/logo-light.svg
      dark: /assets/images/logo-dark.svg
      alt: RubyLLM
      width: 150
      height: 32
  typography:
    body_font_family: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    code_font_family: "'PT Mono', 'JetBrains Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace"
  syntax:
    light_theme: github
    dark_theme: github.dark
  tokens:
    light:
      --vp-c-brand-1: "#3451b2"
    dark:
      --vp-c-brand-1: "#a8b1ff"
  footer:
    message: Released under the MIT License.
    copyright: Copyright © 2021-present Carmine Paolino
  edit_link:
    pattern: "https://github.com/crmne/ruby_llm/edit/main/docs/:path"
    text: Edit this page on GitHub
  doc_footer:
    previous_label: Previous page
    next_label: Next page
  last_updated:
    text: Last updated
    format: "%-d %b %Y, %H:%M"
```

Navigation, sidebar, social links, and versions now live in `_data/*.yml`:

```yml
# _data/navigation.yml
- title: Guide
  url: /getting-started/
  collections: [getting_started, core_features, advanced]
```

VitePress parity notes:

- Branding, typography, syntax, labels, footer/doc footer, and behavior keys are supported via `jekyll_vitepress.*`.
- `typography.body_font_family` / `typography.code_font_family` maps to `--vp-font-family-base` / `--vp-font-family-mono`.
- Syntax highlighting uses Jekyll/Rouge themes via `jekyll_vitepress.syntax.light_theme` and `jekyll_vitepress.syntax.dark_theme`.
- `tokens.light` / `tokens.dark` inject raw CSS variable overrides for theme colors and tokens.
- `last_updated` is computed automatically from the source file mtime (unless `last_updated_at` is set in front matter).

Code block title syntax (Jekyllized equivalent of VitePress code block titles):

````md
```ruby
puts "Hello"
```
{: data-title="example.rb"}
````

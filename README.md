# Finnovest Playground

A collection of throwaway prototypes and experiments for Finnovest, built with Claude Code.

## How it works

This playground is designed to be used with Claude Code. The `.claude/skill.md` file contains instructions that Claude follows to generate prototypes. You describe what you want, Claude builds it as a single `.astro` file.

## Running the project

```sh
npm install    # first time only
npm run dev    # starts server at localhost:4321
```

## Structure

Each feature lives in its own folder with a prototype and summary doc:

```
src/pages/
  feature-name/
    index.astro    → localhost:4321/feature-name
    readme.md      → summary for future viewers
```

## Portability

The content of any `.astro` file (everything below the `---` frontmatter) is just HTML with `<style>` and `<script>` tags. You can copy-paste it directly into any browser's dev tools or an HTML file and it will work standalone.

## Deployment

Configured for Netlify. Push to main and it builds automatically.

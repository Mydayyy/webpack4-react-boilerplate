# Webpack 4 React Boilerplate

## Introduction

This boilerplate gives you a great starting point to develop your own react app.
It is using Webpack 4 with the entire build process already set up.
The following features are included:

### Features

#### CSS Extraction
In production, the css will be extracted and put into its own file
called main.contenthash.css. To avoid browser caching, contenthash will be
replaced by the actual hash of the file. The css file will be automatically
inserted into the html file.

In development, the css will be loaded by the style loader and added as style
tags into the document body. This is done to support hot module replacement
for css.

#### CSS Includes
You can include scss files in `src/scss` from the components scss, to get access to
variables. See `src/js/components/Button/Button.scss` for an example. Please
make sure to also write the `.scss` extensions when including, otherwise
webpack may try to include paths from node_modules.

#### CSS Autoprefixer
The resulting css file will automatically be prefixed according to the rules
specified inside the package.json (key: browserslist). Prefixing is done in
production as well as in development.

#### Hot Module Replacement (HRM)
All css changes will be displayed without reloading the page.

#### Static Site Generator
You can output a static site by setting `ENABLE_STATIC_SITE_GENERATOR` to true
inside the webpack.config.js. This is useful for SEO  and similiar purposes.
Defaults to false

As for javascript changes, this boilerplate uses
[gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader).
Please keep the following in mind:

> There is no way to hot-update constructor code, as result even new
> components will be born as the first ones, and then grow into the last ones.
> As of today, this issue cannot be solved.

([source/gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader#new-components-keep-executing-the-old-code))

### Roadmap
- Extend boilerplate to support multiple languages
- Extend boilerplate to include router and multiple pages
- Extend boilerplate to include a static site generator

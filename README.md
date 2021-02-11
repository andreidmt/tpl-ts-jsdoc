<!-- markdownlint-disable line-length -->

# tpl-ts-jsdoc

> Plain Javascript with Typescript as JSDoc comments.

![Vim with Typescript evaluating Javascript code](docs/screenshot.png)

<!-- vim-markdown-toc GFM -->

* [Why?](#why)
* [Stack](#stack)
* [Documentation & Tools](#documentation--tools)
* [Tips](#tips)

<!-- vim-markdown-toc -->

## Why?

* :godmode: Plain Javascript and JSDoc.
* :lipstick: Typescript is good for types, not verbosing Javascript.
* :scroll: Types are part of the docs, not code.
* :two_hearts: Enforce writing inline docs by giving them static typing powers.

## Stack

* Main: [Typescript 4](https://github.com/microsoft/TypeScript)
* Testing: [riteway](https://github.com/ericelliott/riteway)
* Linting: [ESLint](https://github.com/eslint/eslint), [@asd14/eslint-config](https://github.com/asd-xiv/eslint-config)
* Code formatting: ESLint rules + [prettier](https://github.com/prettier/prettier)
* Environment variable: [dotenv](https://github.com/motdotla/dotenv)

## Documentation & Tools

* [Typescript JSDoc compatibility](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
* [JSDoc](https://jsdoc.app/)
* [documentation.js](https://github.com/documentationjs/documentation) - Automatic documentation generation from JSDoc
* [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown)

## Tips

* [Naming conventions that work](https://github.com/kettanaito/naming-cheatsheet)
* [Hierarchical Model-View-Controller](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* Better repeat yourself than a wrong abstraction
* Don't fix imaginary future problem
* Extract code in libraries and test 100%
* Don't mock, write E2E tests

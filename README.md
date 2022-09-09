# ES Module Shims polyfill issue

Repro project for the issue when using [ES Module Shims](https://github.com/guybedford/es-module-shims) under the following conditions:
- es-modules-shims in polyfill mode
- browser that doesn't support import maps (eg. Firefox)
- entry file that tries to dynamically import a module (using `importShim`)
- dynamic module that needs to import the entry file

### Current behavior
Entry file is reexecuted during the dynamic import. Because of a side effect in the entry file (that can only run once) the import throws and the dynamic import fails.

### Expected behavior
Entry file is executed only once (cfr Chrome). The dynamic import succeeds.

## Usage

Run `npx http-server -o`
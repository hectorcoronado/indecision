# :confused: INDECISION :tired_face:

### a repo created to learn React Fiber & React Router v4.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#### From the terminal, run:

```
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

##### ...alternately,
```
babel src/sandbox/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
```
What does this command do?

1. `babel src/app.js` specifies the file we want babel to compile...
2. `--out-file=public/scripts/app.js` specifies where the compiled content to be generated; by running this command, this file is overwritten
3. `--presets=env,react` specifies, via a comma-separated-list, the presets we want babel to use
	* `env` enables latest ES features that may not yet be widely supported across browsers
	* `react` enables React code
4. `--watch` continually recompiles the source file after any modifications to it and re-generates the output file

#### ...and to fire up a barebones dev server:

```
$ live-server
```

#### ...if live-server is not installed, then install it.

```
$ npm install -g live-server
```

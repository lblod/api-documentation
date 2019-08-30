# Editor documentation

Documentation of the LBLOD editor components. The documentation must be written following the [YUIDoc syntax](http://yui.github.io/yuidoc/syntax/index.html) and will be generated using [ember-cli-yuidoc](https://github.com/cibernox/ember-cli-yuidoc). 

## Installation

```bash
npm install
```

## Adding a new component to the document generator

* Install the component so it appears in `package.json`
* Add the path to the new component to the `options.paths` array in `yuidoc.json`

The documentation of the component will now be included when generating the docs using

```bash
ember ember-cli-yuidoc
```

## Running

* `ember s`
* Visit the docs at [http://localhost:4200](http://localhost:4200).

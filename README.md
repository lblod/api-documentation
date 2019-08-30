# Editor documentation

Documentation of the LBLOD editor components. The documentation must be written following the [YUIDoc syntax](http://yui.github.io/yuidoc/syntax/index.html) and will be generated using [ember-cli-yuidoc](https://github.com/cibernox/ember-cli-yuidoc). 

You can view this documentation with docker by running The following command, the documentation is then available on http://localhost
```
  docker run -p 80:80 lblod/editor-documentation
```

Alternatively you can generate the documentation using ember with the following commands:
```
git clone https://github.com/lblod/editor-documentation
cd editor-documentation
edi npm install
ember serve --docs
```

The documentation will then be available on http://localhost:4200 .

## Extending the documentation

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

or served by ember serve using
* `ember s --docs`
* Visit the docs at [http://localhost:4200/docs](http://localhost:4200/docs).

# developing...!

# component-gen

Generate react component with storybook and unit test(snapshot by enzyme) file by schematics

# install

`$ npm install --save-dev @angular-devkit/schematics-cli component-gen`

# setup

in `package.json`

```
  "scripts": {
    "gen": "schematics component-gen:react"
  }
```

# usage

`$ npm run gen -- --name=Header --path=src/components`

```
$ tree src/components/Header/

src/components/Header/
├── Header.jsx
├── Header.stories.js
├── Header.test.js
└── index.js
```

![](https://github.com/hand-dot/component-gen/blob/master/component-gen.gif)

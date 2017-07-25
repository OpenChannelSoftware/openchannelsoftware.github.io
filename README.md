# JSProjectTemplate

## Installation

As with most node/npm project templates, starting a project based on this template is (or should be) as simple as cloning this repository then typing ` $ npm install `.

If that doesn't work let me know and we'll see what we can do.

Since the purpose of this repository is to dig into the underlying components and libraries, and to document the process for Future Larry, the following breakdown of install commands can be used to reconstitute the dependencies section(s) of package.json:


```
$ npm install --save-dev webpack webpack-dev-server webpack-cleanup-plugin webpack-dashboard html-webpack-plugin extract-text-webpack-plugin

$ npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react babel-runtime

$ npm install --save-dev babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime 

$ npm install --save react react-dom react-bootstrap bootstrap@4.0.0-alpha.6

$ npm install --save-dev css-loader file-loader postcss-loader react-hot-loader url-loader react-hot-loader

npm install --save ajv d3

```
# JSProjectTemplate

This is a simple javascript project template setting up dependencies for [Reactjs], [Bootstrap], [Webpack], and [Babel], [Lodash], [D3] design and workflow with testing in [Mocha] and [Chai]. 

> Really? 

Yes, Really. 
> Then why aren't Lodash and D3 in the project name? 

Because it's my project. Now shut up before I call it "pomegranate" or something.

This is a repo that should be used as a seed shortcut for setting up new projects using these components. 


## Installation

As with most node/npm project templates, starting a project based on this template is (or should be) as simple as cloning this repository then typing ` $ npm install `.

If that doesn't work let me know and we'll see what we can do.

Since the purpose of this repository is to dig into the underlying components and libraries, and to document the process for Future Larry, the following breakdown of install commands can be used to reconstitute the dependencies section(s) of package.json:


```
$ npm install --save-dev webpack webpack-dev-server webpack-cleanup-plugin webpack-dashboard html-webpack-plugin extract-text-webpack-plugin

$ npm install --save-dev babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react babel-runtime

$ npm install --save-dev babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime 

$ npm install --save react react-dom react-bootstrap bootstrap@4.0.0-alpha.6 

$ npm install --save axios redux redux-promise r redux-thunk react-redux react-router redux-promise-middleware@4.2.1

$ npm install --save-dev css-loader file-loader postcss-loader react-hot-loader url-loader react-hot-loader

$ npm install --save ajv d3

$ npm install --save-dev mocha chai mochawesome

```


## Process (branches)
This section describes branches of the repository that describe milestones in building this template and it's intended as a record of my learning path and also a cummulative approach to the final master template.

### 01: Testing
I'm always saying that we I should do more automated testing, so here it is. The first piece before we start any UI or fancy stuff is to test the testing framework. For this template, I'm using Mocha with Chai and this branch is the output of that.

There is one series of tests in `test/test.js`. It's intended to exercise the functional minMax implementation in `src/`. The idea is that minMax will get the objects with the minMax values based on a specific field. This was supposed to deal with getting the earliest and latest dates in an array of objects (so that we can set the scale of an axis in a graph).

### 02: Webpack/Babel 
This section sets up the build tools to create required index.html and bundle.js in the dist directory. After this section is complete, you can run the embedded webserver by calling `$ npm start` and then changes in the source code will be continuously built and displayed by accessing the page served on `http://127.0.0.1:8080/`. 

This is obviously the most basic webpack and babel setup. Building CSS from SCSS is the next step so components like Bootstrap can be customized, but we'll leave that for a later TODO.

### 03: React/Bootstrap

This section sets up the [Reactjs] view framework for displaying content and the [Bootstrap] CSS framework for styling. react-bootstrap is also used for easier styling of React elements.

### 04: Lodash (TODO)

### 05: D3 (TODO)







## Dependencies
* [Reactjs]
* [Redux]
* [Axios]
* [Bootstrap]
* [Webpack]
* [Babel]
* [Node]
* [NPM]
* [D3]
* [Mocha]
* [Chai]
* [Mochawesome]


## References
Thank you to the following sites that helped me create the content for this template. This is a mixture of tools and techniques, so if I've misinterpreted or misapplied the tutorials, I'm sorry (but that's the way things go on the interwebs). As far as I know, I have not copied any copyrighted material here. If I've included copyrighted material in error, please let me know and I will correct it. That being said, you are free to use the content of this template without any warranty or guarantee of suitability. (Frankly, I'm hoping it's suitable for me!)

* [Setting Up React, Webpack, Babel]
* [Using the HTML Webpack Plugin for generating HTML files]
* [Setup an environment using React, Webpack, Babel]
* [Simple React, Webpack, Babel Starter Kit]



[Setting Up React, Webpack, Babel]: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
[Reactjs]:  https://facebook.github.io/react/
[Bootstrap]: https://v4-alpha.getbootstrap.com/ 
[Webpack]: https://webpack.github.io/
[Babel]: https://babeljs.io/
[Node]: https://nodejs.org/en/
[NPM]: https://www.npmjs.com/
[Lodash]: https://lodash.com/
[D3]: https://d3js.org/
[Using the HTML Webpack Plugin for generating HTML files]: https://javascriptplayground.com/blog/2016/07/webpack-html-plugin/
[Setup an environment using React, Webpack, Babel]: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
[Simple React, Webpack, Babel Starter Kit]: https://github.com/alicoding/react-webpack-babel
[Mocha]: https://mochajs.org/
[Chai]: http://chaijs.com/
[Mochawesome]: https://www.npmjs.com/package/mochawesome
[Redux]: http://redux.js.org/
[Axios]: https://www.npmjs.com/package/axios


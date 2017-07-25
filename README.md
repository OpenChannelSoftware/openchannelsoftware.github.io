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

$ npm install --save-dev css-loader file-loader postcss-loader react-hot-loader url-loader react-hot-loader

$ npm install --save ajv d3

$ npm install --save-dev mocha chai

```


## Process (branches)
This section describes branches of the repository that describe milestones in building this template and it's intended as a record of my learning path and also a cummulative approach to the final master template.

### 01: Testing
I'm always saying that we I should do more automated testing, so here it is. The first piece before we start any UI or fancy stuff is to test the testing framework. For this template, I'm using Mocha with Chai and this branch is the output of that.








## Dependencies
* [Reactjs]
* [Bootstrap]
* [Webpack]
* [Babel]
* [Node]
* [NPM]
* [D3]
* [Mocha]
* [Chai]


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
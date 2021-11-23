

# Baby Steps with React JS and NPM
This is a React App tutorial from scratch, step by step, to deminish all the "magic" around of an initialization of an automated React App

1. The initial Set up is to create and initialize the project with the following directories and files within the /react-using-npm directory
```
mkdir src public
touch src/app.js src/app.css src/index.js public/index.html
```
---

## Adding npm to initialiaze package.json and installing development dependencies

To create a package.json, use the following command, this will be useful to manage all dependencies installed on our project
```
npm init
```


The following dependencies are just for development not production mode.

1. Babel, is an **npm package**, to transpile our **J**ava**S**cript E**X**tended code (***JSX***) for the browser to undestand it, as well to keep all ESNext features from JavaScript and it's compatibility with all browsers. 

- ***babel-core*** is the main engine of abbel plugin for its dependents to work. 
```
npm i @babel/core --save-dev
```
- ***babel-preset-env*** allows support for ES2015 (ES6) features (compiles ES6 code to ES5). 
```
npm i @babel/preset-env --save-dev
```
- ***babel-preset-react*** allows conversion of JSX to plain JavaScript:
```
npm i @babel/preset-react --save-dev
```

- ***babel-loader*** allows communication between webpack and babel
```
npm i babel-loader --save-dev
```
All of this commands will add a node_modules directory that contains our dependencies' code 

- Since we installed presets (plugins), we need to utilize them so let's create a babel configuration file ```.babelrc```, in the root of our project and add the presets there.

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

- you can also add a .gitignore file to ommit loading node_modules directory or any other file that may contain personal info or that is not required to load on github.

1.1 At this point we can test our babel setup works properly, int the file ```app.js``` file we add s simple arrow function:
```
// src/app.js
const app = () => console.log("Babel test works");
```
To run this file with babel, we need to install ```babel-cli```
```
npm i @babel/cli --save-dev
```

Now running the following command:
```
npx babel src/app.js
```
After running the mentionated command we can se iin the console the following output:
```
C:\Users\codel-lessons\react-using-npm>
"use strict";

var app = function app() {
  return console.log("Babel test works");
};
```
Our app is working as expected thanks to ***preset-react***, as before, the arrow function is turned into function expression, const went into var

With this, we wrapped up configuring ```babel``` and we can proceed to write some code using the React library. 

One last thing to be done in the  ```src/app.js``` is exporting the function ```App``` to make it available for other parts of the application to use. Your ```src/app.js``` should look like this:

```
//src/app.js
const App = () => {
    return <h1 className="app">
        Hello World!
    </h1>;
};

export default App;
```

## Install the dependencies - react and react-dom

Unlike bable, which is development dependency, react and react-dom are dependencies on which the functioning of the app depends in the production mode.

To make ***react*** and ***react-dom*** available in our app, we need to install them like any other npm package:
```
npm install react react-dom
```

- Now to be able to use react and react-dom, we need to add them to the ```src/index.js``` file:
```
import React from "react";
import ReactDOM  from "react";
import App from './app';

ReactDOM.render(<App/>, document.getElementById('root'));
```

Also in the src/app.js we are using JSX, so lets import the react there as well. Otherwise, you might new get an error that ```ReferenceError: React is not defined```.
```
//src/app.js
import React from "react";
const App = () => {
    return <h1 className="app">Hello World!</h1>;
};

export default App;
```

## Install development dependencies - part 2

Here we'll se the difference between ***webpack*** and ***Babel***:

|***webpack***| ***Babel***|
|-------------|------------|
|build tool that allow us to take all our project assets and turns them into production - ready bundle|transpiles the code to all browsers |

- Install webpack in our app:
```
npm i webpack --save-dev
npm i webpack-cli --save-dev
```
The first one allow us to use webpack npm package and all its methods and properties.

The second one allow us to use webpack command line interface
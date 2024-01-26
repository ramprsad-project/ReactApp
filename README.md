# ReactApp

Install 
Node

```npm install -g yarn``` 

```yarn add react react-dom```

In below command -D means add to dev dependencies in package.json:
```yarn add -D typescript @types/react @types/react-dom```

Install babel:

```yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript```

Install webpack:

```yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin```

To transpiling javascript files using babel and webpack.

```yarn add -D babel-loader```

Now set start command in package.json:

```webpack serve --config webpack.config.js --open```

Then run the app

```yarn start```

Loaders to load the newly added style sheet css files, images , svgs etc...

```yarn add -D css-loader style-loader```

### NOTE:
Here in react ```<></>``` will be used when using mutliple children elements. this symbol is called as React fragment.

# Working with Different environments using Webpack
### Step - 1
Create a webpack.common.js file and remove the section " mode: 'development',"

### Step - 2
 Create 3 new files inside webpack folder name them as :webpack.dev.js, webpack.prod.js and webpack.config.js

 ### Step - 3

 inorder to merge or maintain the communication betwwen the prod and dev configs below pack need to be installed
 ```yarn add -D webpack-merge```
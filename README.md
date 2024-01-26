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
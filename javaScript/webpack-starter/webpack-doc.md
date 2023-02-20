# Using Webpack

1. Creating folder
    - Create **src** dir with two js files on it: 
    - Create **dist** dir with the index.html

2. Initializing npm
    - `npm init -y`
    - `npm i -D webpack webpack-cli`

3. Running webpack
   Create a script in the package.json file
   - `"build": "webpack --module production"`
   - `npm run build`
   This will compile all js code into main.js, this file will be
   generating automatically, and you have to add this file to the index.html
   to get it work.

3. Creating webpack config file
    - Create a file `webpack.config.js` on the root project folder
    - Adding code:
        '''
        module.exports = {
            mode: 'development',
        }
        '''
      With this config you can delete the `--module production` flag add in the
      package.json script having `"build": "webpack"`

4. Setting the entries and outputs
   You can see more reference of this step in the webpack.config.js file

5. Adding Loaders and SASS to the project
   Loads images, css, sass to right to js
    - `npm i -D sass style-loader css-loader sass-loader`
    - Crate a sass file and the styles dir, in this case I crated the main.scss file
      inside the styles dir.
    - **To see how to add the loader**, see the webpack.config.js file, you need to add
      this loader in order to compile the sass code.

6. HTML plugin
    - `npm i -D html-webpack-plugin`
    - You need to add this package in the webpack.config.js file
      '''
        const htmlWebpackPlugin = require('html-webpack-plugin');
      '''
      You can more info on webpack.config.js
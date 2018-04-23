const webpack = require('webpack');
const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
   context: path.resolve(__dirname, 'src'), 
   entry: './js/app.js',
   output: {
       path: path.resolve(__dirname, 'dist'),
       publicPath: './',
       filename: 'bundle.js'
   },
   module: {
       rules: [
           {
               test: /\.scss$/,
               use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: ["css-loader", "sass-loader"]
                   
               })
              
           },
           {
               test: /\.css$/,
                use: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: "css-loader"
                   
               })
               
           },
           {
               test: /\.(jpg|png|gif)$/,
                  use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]   
           },
           {
               test: /\.(woff2?|svg)$/,
               use: ["url-loader?name=fonts/[name].[ext]&limit=10000" ]
           },
           {
              test: /\.(ttf|eot)$/,
               use: ["file-loader?name=fonts/[name].[ext]"] 
           }
       ]
   },
   plugins: [
     new BrowserSyncPlugin({
            port: 3000,
            proxy: 'http://localhost/yourdir/',
            files: ['**/*.php']
        }),
        new webpack.ProvidePlugin({
           
            Popper: ['popper.js', 'default'],
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
          }), 
      new ExtractTextPlugin('bundle.css'),  
      new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, ''),
      verbose: true,
      dry: false
    })    
   ]
};

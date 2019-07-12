const webpack = require('webpack');
const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'src')+'/js/app.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js'
    },
   module: {
       rules: [
           {
               test: /\.(sa|sc|c)ss$/,
               use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
                'sass-loader',
              ]
              
           },
          
           {
               test: /\.(jpg|png|gif)$/,
               use: [
                {
                 loader: 'file-loader',
                 options: {
                    name: '[path][name].[ext]'
                 }
                },
              ]   
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
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css'
          }),  
      new CleanWebpackPlugin()    
   ]
};

# wordpress-webpack
Wordpress quick-start with webpack automation uses node.js, yarn and webpack to process automation

### What is this repository for? ###

* Wordpress theme with webpack automation
* Automatically compiles scss files into css and bundles it
* Automatically bundles javascript files



### How do I get set up? ###

* Clone to local dir using git command: git clone repo_url
* Change the directory on cmd to yourlocaldir/ 
* In cmd type: yarn install (This will install required plugins for the project) 
* In webpack.config.js change the dir url inside BrowserSyncPlugin (proxy: 'http://localhost/yourdir')
* In src/js/app.js file change the css/scss and javascript file dir
* Confirm functions.php file changes
* In terminal type 'yarn run start' to start compiling
* Use 'yarn run build' for production ready files



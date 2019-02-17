# webpack4-demo-project
Its a demo project with webpack v4.29.4, React v16.8.2, Babel v7 and covered below mentioned topics - 

    JS Bundling
    Creation of html file in dist/public folder
    Implemented sass style in app
    Web-dev-server
    Environment based config : mentioned 2 ways of doing it
        1) seperate files for dev and prod and common config file and use of webpack-merge
        2) refer web.config.js line 53 onwards commented section where we passing env, argv 2 params and based on that we define our config
    Plugins
         1) html-webpack-plugin
         2) uglifyjs-webpack-plugin
         3) hot module replacement

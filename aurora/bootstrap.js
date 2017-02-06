/**
 * NPM modules
 */
const express = require('express');
const app = express();

/**
 * Globals
 */
global._ = require('lodash');


/**
 * Get Config
 */
const routes    = require('../config/routes.js');
const database  = require('../config/database.js');
const settings  = require('../config/settings.js');

/**
 * Create global Aurora object
 */
global.Aurora    = {};
Aurora._settings = settings;
Aurora._database = database;
Aurora._routes   = routes;

/**
 * Get Aurora components
 */
const orm       = require('./orm/orm');
const router    = require('./router/router');
const views     = require('./views/views');

//set base Express app
Aurora._app = app;


module.exports = () => {
    //validate config
    require('./validation/startup').validate(database, settings, routes);

    //configure ORM
    console.log('loading ORM');
    orm();

    //configure views
    console.log('configuring views');
    views();

    //configure router
    console.log('loading router');
    router();

    //configure security
    console.log('configuring security');

    //start express
    Aurora._app.listen(Aurora._settings.environment.port, () => {
        console.log(`Aurora is running on port ${Aurora._settings.environment.port}`)
    });
};
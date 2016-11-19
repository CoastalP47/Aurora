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
 * Get Aurora components
 */
const orm       = require('./orm/orm');
const router    = require('./router/router');

/**
 * Create global Aurora object
 */
global.Aurora   = {};
Aurora._settings = settings;
Aurora._database = database;
Aurora._routes = routes;


module.exports = () => {
    /**
     * Validate Config
     */
    require('./validation/startup').validate(database, settings, routes);

    /**
     * ORM
     */
    console.log('loading ORM');
    orm();

    let pat = new User({
        first_name  : 'Pat',
        last_name   : 'Eason'
    });
    console.log(pat);
    console.log(pat.first_name);
    pat.first_name = 'Rachel';
    console.log(pat.first_name);

    /**
     * Router
     */
    console.log('loading router');
    router();

    /**
     * Views
     */
    console.log('configuring views');

    /**
     * Security
     */
    console.log('configuring security');
};
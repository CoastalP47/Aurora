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
const Model     = require('./orm/classes/model');

/**
 * Create globaL Aurora object
 */
global.Aurora   = {};


module.exports = () => {
    /**
     * Validate Config
     */
    require('./validation/startup').validate(database, settings, routes);

    /**
     * ORM
     */
    console.log('loading models');
    let models = require('require-all')(global.root_dir + settings.models.path);
    Aurora.models = [];
    _.forEach(models, (v, k) => {
        Aurora.models[k] = Model.createModel(v, k);
        if( settings.global.models ){
            global[k] = Aurora.models[k];
        }
    });

    console.log(User);

    let pat = new User({
        first_name  : 'Pat',
        last_name   : 'Eason'
    });
    console.log( pat );
    console.log( pat.first_name );

    /**
     * Router
     */
    console.log('loading routes');

    /**
     * Views
     */
    console.log('configuring views');

    /**
     * Security
     */
    console.log('configuring security');
};
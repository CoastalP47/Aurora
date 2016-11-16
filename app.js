console.log('Aurora is starting');

/**
 * Get Config
 */
const routes    = require('./config/routes.js');
const database  = require('./config/database.js');
const settings  = require('./config/settings.js');

/**
 * Validate Config
 */
if( require('./aurora/validation/startup').validate(database, settings, routes) ){
    console.log('settings check out');
}
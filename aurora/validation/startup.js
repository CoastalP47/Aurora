module.exports = {
    validate : (database, settings, routes) => {
        return !!module.exports.database(database).routes(routes).settings(settings);
    },
    database : config => {
        if( !config.driver ){
            throw Error('Database driver required');
        }
        if( !config.host ){
            throw Error('Database host required');
        }
        if( !config.user ){
            throw Error('Database user required');
        }
        if( !config.pass ){
            throw Error('Database pass required');
        }
        return module.exports;
    },
    routes : config => {
        return module.exports;
    },
    settings : config => {
        return module.exports;
    }
};
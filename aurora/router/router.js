var express = require('express');

module.exports = () => {
    /**
     * Load default routes based on loaded models
     */


    /**
     * Load all defined controllers into Express App
     */
    let controllers = require('require-all')(`${process.cwd()}${(Aurora._settings.controllers.path ? Aurora._settings.controllers.path : '/controllers')}`);
    _.forEach(controllers, (v, k) => {
        console.log(`Loading ${k} controller`);
        var router = express.Router();

        _.forEach(v, function(action, route){
            router.all(route, action);
        });

        Aurora._app.use(`/${k}`, router);
    });

    Aurora._app.get('/', (req, res) => {
        res.send('Hello World!');
    });
};
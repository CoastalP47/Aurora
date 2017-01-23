var express = require('express');

module.exports = () => {
    /**
     * Load default REST routes based on loaded models, if enabled
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

    //set default
    let default_controller  = 'site';
    let default_action      = '/';
    if(Aurora._routes.default_route){
        default_controller  = Aurora._routes.default_route.controller ? Aurora._routes.default_route.controller : 'site';
        default_action      = Aurora._routes.default_route.action ? Aurora._routes.default_route.action : '/';
    }else{
        Aurora._routes.default_route = {
            controller  : default_controller,
            action      : default_action
        }
    }
    let default_route       = controllers[default_controller][default_action];
    Aurora._app.get('/', default_route);
    console.log(`Index action set to ${default_controller}.${default_action}`);
};
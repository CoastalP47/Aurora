const Model     = require('./classes/model');

module.exports = () => {
    Aurora.models = [];

    /**
     * Load all models into Aurora scope
     */
    let models = require('require-all')(`${process.cwd()}${Aurora._settings.models.path ? Aurora._settings.models.path : '/models'}`);
    _.forEach(models, (v, k) => {
        Aurora.models[k] = Model.createModel(v, k);
        if(Aurora._settings.global.models){
            global[k] = Aurora.models[k];
        }
    });

};
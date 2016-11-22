const express = require('express');

module.exports = () => {
    //set public directory
    Aurora._app.use(express.static('public'));

    //set view engine
    Aurora._app.set('view engine', Aurora._settings.views.engine);
};
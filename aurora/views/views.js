const express   = require('express');
const hbs       = require('express-hbs');

module.exports = () => {
    //set public directory
    Aurora._app.use(express.static(`${process.cwd()}/public`));

    //set view engine
    // Aurora._app.set('view engine', Aurora._settings.views.engine);
    Aurora._app.engine('hbs', hbs.express4({
        partialsDir: `${process.cwd()}/views/partials`
    }));
    Aurora._app.set('view engine', 'hbs');
    Aurora._app.set('views', `${process.cwd()}/views`);

    //load middleware
    require('./middleware/view-render')();
};
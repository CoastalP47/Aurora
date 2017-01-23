module.exports = (req, res, next) => {
    console.log('triggered view-render middleware');

    var _render = res.render;

    res.render = function( view, options, fn ){
        //get current route
        let view_dir    = req.baseUrl ? req.baseUrl.replace('/','') : Aurora._routes.default_route.controller;
        let view_path   = `${view_dir}/${view}`;

        //load layout
        let layout_dir  = Aurora._settings.views.layout;
        options = options || {};
        if( options.layout ){
            options.layout = `${process.cwd()}${layout_dir}/${options.layout}`;
        }else{
            _.extend( options, {layout: `${process.cwd()}${layout_dir}/default`} );
        }

        //continue with route
        _render.call( this, view_path, options, fn );
    };

    next();
};
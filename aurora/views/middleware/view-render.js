module.exports = (req, res, next) => {
    console.log('triggered view-render middleware');

    var _render = res.render;

    res.render = function( view, options, fn ){
        console.log(req);
        // do some custom logic
        _.extend( options, {session: true} );
        // continue with original render
        _render.call( this, view, options, fn );
    };

    next();
};
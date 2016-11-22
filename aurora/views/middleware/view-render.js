module.exports = () => {
    Aurora._app.use((req, res, next) => {
        console.log(req);
        console.log(res);

        var _render = res.render;

        res.render = (view, options, fn) => {
            console.log(view);
            console.log(options);
            console.log(fn);
        };

        next();
    });
};
module.exports = {
    '/' : (req, res) => {
        res.render('index');
    },
    '/:user_id' : (req, res) => {
        res.render('view', {
            user_id : req.params.user_id
        });
    }
};
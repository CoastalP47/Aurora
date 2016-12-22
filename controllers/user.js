module.exports = {

    //index
    '/' : (req, res) => {
        res.render('index', {
            title: 'Users Index'
        });
    },

    //view
    '/:user_id' : (req, res) => {
        res.render('view', {
            user_id : req.params.user_id,
            title: `User #${req.params.user_id}`
        });
    }
};
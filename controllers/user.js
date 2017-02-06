module.exports = {

    //index
    '/' : (req, res) => {
        let users = new User().find();
        res.render('index', {
            title: 'Users Index'
        });
    },

    //view
    '/:user_id' : (req, res) => {
        let user = new User().find(req.params.user_id);
        res.render('view', {
            user_id : req.params.user_id,
            title: `User #${req.params.user_id}`
        });
    }

};
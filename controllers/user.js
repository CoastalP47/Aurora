module.exports = {

    //index
    '/' : (req, res) => {
        res.render('index');
    },

    //view
    '/:user_id' : (req, res) => {
        res.render('view', {
            user_id : req.params.user_id
        });
    }
};
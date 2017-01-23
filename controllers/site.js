module.exports = {

    //index
    '/' : (req, res) => {
        console.log('loading SiteIndex');
        res.render('index', {
            title: 'Default Index'
        });
    }
};
const express = require('express');
const app = express();

module.exports = () => {
    Aurora._app = app;

    Aurora._app.get('/', (req, res) => {
        res.send('Hello World!')
    });

    Aurora._app.listen(3000, () => {
        console.log('Example app listening on port 3000!')
    });
};
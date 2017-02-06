const hbs = require('express-hbs');

hbs.registerHelper('css', function(path){
    let dir = Aurora._settings.assets_dir ? Aurora._settings.assets_dir : 'assets/';
    return new hbs.SafeString(dir);
});

hbs.registerHelper('css', function(path){
    let output;
    let dir = Aurora._settings.assets_dir ? Aurora._settings.assets_dir : 'assets/css/';
    output = `${dir}${path}`;
    if(!path){
        throw "No path defined";
    }
    return new hbs.SafeString(`<link rel="stylesheet" type="text/css"href="${output}">`);
});

hbs.registerHelper('js', function(path){
    let output;
    let dir = Aurora._settings.assets_dir ? Aurora._settings.assets_dir : 'assets/js/';
    output = `${dir}${path}`;
    if(!path){
        throw "No path defined";
    }
    return new hbs.SafeString(`<script src="${output}"></script>`);
});


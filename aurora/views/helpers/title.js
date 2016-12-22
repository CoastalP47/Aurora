const hbs = require('express-hbs');

hbs.registerHelper('title', function(text){
    let output;
    let output_format = Aurora._settings.title_format ? Aurora._settings.title_format : '{title} | {site_name}';
    output = output_format.replace('{title}', text).replace('{site_name}', Aurora._settings.name);
    if(!text){
        output = Aurora._settings.name;
    }
    return new hbs.SafeString(`<title>${output}</title>`);
});
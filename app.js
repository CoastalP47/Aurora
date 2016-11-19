console.log('Aurora is starting');

try {
    global.root_dir = __dirname;
    require('./aurora/bootstrap')();
} catch(err) {
    console.error(err);
    process.exit(1);
}
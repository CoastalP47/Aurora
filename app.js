console.log('Aurora is starting');

try{
    require('./aurora/bootstrap')();
}catch(err){
    console.error(err);
    process.exit(1);
}
module.exports = {
  global : {
    "models" : true
  },
  environment: {
    port: 9046
  },
  models : {
    path : '/models'
  },
  controllers : {
    path : '/controllers'
  },
  views : {
    engine    : 'handlebars',
    path      : '/views',
    partials  : '/views/partials'
  }
};
module.exports = {
  name: 'Aurora',
  title_format : '{title} | {site_name}',
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
    partials  : '/views/partials',
    layout    : '/views/layout'
  }
};
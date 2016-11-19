/**
 * Database Config
 * @param string driver [mysql, mongodb]
 * @param string host
 * @param integer port (optional, if empty will default to the default port for selected driver)
 * @param string user
 * @param string pass
 */
module.exports = {
  driver    : "mysql",
  host      : "localhost",
  port      : 6060,
  user      : "root",
  pass      : "root",
  database  : "aurora"
};
const Mysql = require('mysql');
const Squel = require('squel');

module.exports = {
    connection : Mysql.createConnection({
        host     : Aurora._database.host,
        user     : Aurora._database.user,
        password : Aurora._database.pass,
        database : Aurora._database.database
    }),

    connect : () => {
        this.connection.connect();
    },

    disconnect : () => {
        this.connection.end();
    },

    find : (table, query) => {
        this.connect();
        //query here
        this.disconnect();
    },

    findOne : (table, id) => {
        this.connect();
        //query here
        this.disconnect();
    },

    insert : (table, data) => {
        this.connect();
        //query here
        this.disconnect();
    },

    update: (table, data) => {
        this.connect();
        //query here
        this.disconnect();
    },

    delete : (table, data) => {
        this.connect();
        //query here
        this.disconnect();
    }

};
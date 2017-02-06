const Mysql = require('mysql');
const Squel = require('squel');

let database = {
    connection : Mysql.createConnection({
        host     : Aurora._database.host,
        user     : Aurora._database.user,
        password : Aurora._database.pass,
        database : Aurora._database.database
    }),

    connect : () => {
        database.connection.connect();
    },

    disconnect : () => {
        database.connection.end();
    },
};

module.exports = {

    find : (table, query) => {
        database.connect();

        let sql = Squel.select()
                       .from(table);

        if(query){
            sql.where(query);
        }

        database.connection.query(
            sql.toString(),
            function(error, results, fields){
                if(error) throw error;

                return results;
             });

        database.disconnect();
    },

    findOne : (table, id) => {
        database.connect();

        let sql = Squel.select()
            .from(table)
            .where('id = ?', id)
            .limit(1);


        database.connection.query(
            sql.toString(),
            function(error, results, fields){
                if(error) throw error;

                return results;
            });

        database.disconnect();
    },

    insert : (table, data) => {
        database.connect();
        //query here
        database.disconnect();
    },

    update: (table, data) => {
        database.connect();
        //query here
        database.disconnect();
    },

    delete : (table, data) => {
        database.connect();
        //query here
        database.disconnect();
    }

};
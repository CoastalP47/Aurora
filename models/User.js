module.exports = {
    table_name : 'user',
    schema : {
        first_name : {
            type : 'string'
        },
        last_name : {
            type : 'string'
        }
    },
    full_name : () =>{
        return this.first_name + this.last_name;
    }
};
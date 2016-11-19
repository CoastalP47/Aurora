const Validation = require('./validation');

module.exports = {
    createModel : (model, key) => {
        class Model{
            constructor(params){
                if(model.table_name){
                    this._table_name = model.table_name;
                }else{
                    this._table_name = key.toLowerCase();
                }
                this._schema = model.schema;
                this._createGettersAndSetters();
                this._params = {};
                if(params){
                    this._loadData(params);
                }
            }

            _createGettersAndSetters(){
                var _this = this;
                _.forEach(_this._schema, (v, k) => {
                    Object.defineProperty(Model.prototype, k, {
                        get: () => {
                            return _this._params[k];
                        },
                        set: x => {
                            //validations
                            _this._params[k] = x;
                        }
                    });
                });
            }

            _loadData(params){
                var _this = this;
                _.forEach(params, (v, k) => {
                    _this._params[k] = params[k];
                });
            };


            //database interactions
            save(){

            }

            delete(){

            }

            update(){

            }
        }

        return Model;
    }
};
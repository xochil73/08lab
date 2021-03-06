'use strict';

const schema = require('./products-schema.js');

class Products {

    constructor() {
    }

    get(_id) {
        let queryObject = _id ? {_id} : { };
        return schema.find(queryObject);
    }

    post(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }

    put(_id, record) {
        return schema.findByIdAndUpdate(_id, record, {new:true});
    }

    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }

}

module.exports = Products;
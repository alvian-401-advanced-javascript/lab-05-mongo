'use strict';

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return schema.findOne({ _id });
    }
    else { return schema.find({}); }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    if(_id) {
      return schema.updateOne(record);
    }
  }

  delete(_id) {
    if(_id) {
      return schema.deleteOne(_id);
    }
  }

}

module.exports = Categories;

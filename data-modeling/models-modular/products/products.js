const Model = require('../mongo.js')
const schema = require('./products-schema.js');


class Products extends Model {
    
    

  constructor() {
    super();
    this.schema = schema;
    
  }


}

module.exports = Products;

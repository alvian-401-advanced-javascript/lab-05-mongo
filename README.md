# LAB - 05

## Database Modeling

### Author: Alvian Joseph

### Links and Resources
* [submission PR](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling)
* [![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-05-mongo.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-05-mongo)



### Modules
#### [`mongo.js`](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling/models-modular)
    * creates and exports `Model` class with CRUD methods
#### [`categories.js`](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling/models-modular/categories)
    * extends `Model`to `Categories` class and exports
#### [`categories-schema.js`](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling/models-modular/categories)
    * exports schema using mongoose

#### [`products.js`](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling/models-modular/products)
    * extends `Model`to `Products` class and exports
#### [`products-schema.js`](https://github.com/alvian-401-advanced-javascript/lab-05-mongo/tree/master/data-modeling/models-modular/products)
    * exports schema using mongoose

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns true or false

  
#### Tests
* How do you run tests?
  * `npm test`
  * `npm run lint`

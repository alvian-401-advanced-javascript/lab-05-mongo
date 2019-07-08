'use strict';

const mongoose = require('mongoose');
const Categories = require('./models-singular/categories.js');


let sports = new Categories();
// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI);


let basketball = sports.create({ name: 'basketball', description: 'shoot the ball through the hoop' })
  .then(data => { console.log(data); })
  .catch(console.error);
let baseball = sports.create({ name: 'baseball', description: 'try not to fall asleep' })
  .then(data => { console.log(data); })
  .catch(console.error);


// mongoose.disconnect(MONGOOSE_URI);



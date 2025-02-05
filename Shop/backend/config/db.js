const mongoose = require('mongoose');

// No need to include useNewUrlParser and useUnifiedTopology anymore
mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = mongoose;

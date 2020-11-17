const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
  .then(db => console.log(chalk.yellow('DB is connected')))
  .catch(err => console.log(err));
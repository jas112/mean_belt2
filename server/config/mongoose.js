// MEAN Project....

console.log('starting MEANProject mongoose');

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/mean_belt2');
var models_path = path.join(__dirname, '../models/');
mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function(file){
  if (file.indexOf(".js") >= 0){
    require(path.join(models_path, file));
  }
})

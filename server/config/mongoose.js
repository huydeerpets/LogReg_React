var mongoose = require('mongoose');
mongoose.connect('mongoob://localhost/reactLog');
var fs = require('fs'),
    path = require('path'),
    models_path = path.join(__dirname, '../models')

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(path.join(models_path, file))
    }
})

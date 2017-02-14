var mongoose = require('mongoose')
var User = mongoose.model('User')

function sessionController(){
    this.register = function(req, res){
        console.log('hello')
    }
    this.logout = function(req,res){
        console.log('logout')
        res.redirect('/')
    }
}

module.exports = new sessionController()

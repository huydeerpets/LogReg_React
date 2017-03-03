var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcrypt')

function sessionController(){
    this.register = function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            var errors = [];
            for(var key in req.body){
                if(!req.body[key]){
                    return res.json({status: false, message: ['fields need to be filled']})
                }
            }
            if(!user){
                if(req.body.password == req.body.confirm){
                    var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
                } else {
                    errors.push('Passwords do not match.')
                }
                var user = new User({username: req.body.username, email: req.body.email, password: password});
                user.save(function(err, data){
                    if(err){
                        console.log('Error saving new user.')
                    } else {
                        return res.json({status: true, message:'Added new user.'})
                    }
                });
            } else {
                errors.push('Email or user already in database.')
            }
            return res.json({status: false, message: errors})
        });
    };
    this.login = function(req,res){
        var errors = [];
        for(var key in req.body){
            if(!req.body[key]){
                return res.json({status: false, message: ['fields need to be filled']})
            }
        }
        User.findOne({email: req.body.email}, function(err, user){
            if(!user){
                errors.push('No account in database.')
            } else {
                if(bcrypt.compareSync(req.body.password, user.password)){
                    return res.json({status: true, message: 'User is now logged in.'})
                } else {
                    errors.push('Password did not match.')
                }
            }
            return res.json({status: false, message: errors})
        })
    };
    this.logout = function(req,res){
        console.log('logout')
        res.redirect('/')
    };
}

module.exports = new sessionController()

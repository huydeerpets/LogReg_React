var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcrypt')

function sessionController(){
    this.register = function(req, res){
        console.log(req.body)
        User.findOne({email: req.body.email}, function(err, user){
            if(!user){
                if(req.body.password == req.body.confirm){
                    var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
                } else {
                    return res.json({user: null})
                }
                var user = new User({username: req.body.username, email: req.body.email, password: password});
                user.save(function(err, data){
                    if(err){
                        console.log('Error saving new user.')
                    } else {
                        return res.json({user: data})
                    }
                });
            } else {
                return res.json({user: 'Email already in database.'})
            }
        });
    };
    this.login = function(req,res){
        User.findOne({email: req.body.email}, function(err, user){
            if(!user){
                return res.json({user: 'No account in database.'})
            } else {
                console.log(user)
            }
        })
    };
    this.logout = function(req,res){
        console.log('logout')
        res.redirect('/')
    };
}

module.exports = new sessionController()

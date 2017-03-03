var session = require('../controllers/sessionController.js')
module.exports = function(app){
    app.post('/register', session.register);
    app.post('/login', session.login);
    // app.get('/checkUser', session.checkUser);
    app.get('/logout', session.logout)
}

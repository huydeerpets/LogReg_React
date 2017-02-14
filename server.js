var express = require('express'),
    bp = require('body-parser'),
    path = require('path'),
    session = require('express-session'),
    root = __dirname,
    port = process.env.API_PORT || 3000,
    app = express(),
    router = express.Router()

app.set('trust proxy', 1)
app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(express.static(path.join(root, 'client')));
app.use(bp.json())

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log('Server is listening on port: 3000')
})

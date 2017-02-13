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

// set the route path and initialized API
router.get('/', function(req,res){
    res.json({message: "API initialized"})
})

app.use('/api', router);

app.listen(port, function(){
    console.log('API is listening on port: 3000')
})

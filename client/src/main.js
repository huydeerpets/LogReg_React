var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./Login'),
    Register = require('./Register'),
    axios = require('axios');

var App = React.createClass({
    onRegister: function(data){
        console.log(data, 'onReg');
        axios.post('/register', data).then(function(response){
            console.log(response.data)
        })
    },
    onLogin: function(data){
        console.log(data, 'onLog');
        axios.post('/login', data).then(function(response){
            console.log(response.data)
        })
    }
    render: function(){
        return (
            <div>
                <Register onSubmit = {this.onRegister}/>
                <Login onLogin = {this.onLogin}/>
            </div>
        )
    }
})

ReactDOM.render(<App/>, document.getElementById('app'))

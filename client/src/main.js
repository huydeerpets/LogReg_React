var React = require('react'),
    ReactDOM = require('react-dom'),
    Login = require('./Login'),
    Register = require('./Register');

var App = React.createClass({
    onRegister: function(data){
        console.log(data)
    },
    render: function(){
        return (
            <div>
                <Register onSubmit = {this.onRegister}/>
                <Login/>
            </div>
        )
    }
})

ReactDOM.render(<App/>, document.getElementById('app'))

var React = require('react')

var Login = React.createClass({
    getInitialState: function(){
        return {
            email: null,
            password: null
        }
    },
    login: function(e){
        e.preventDefault();
        this.props.onLogin(this.state)
    },
    handleInputChange: function(key, event){
        var stateObj = this.state;
        stateObj[key] = event.target.value;
        this.setState(stateObj)
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.login} method='post'>
                    <fieldset>
                        <legend> <h1>Login</h1> </legend>
                        <label>Email:
                            <input type='text' name='email' onChange = {this.handleInputChange.bind(this, 'email')}/>
                        </label><br/>
                        <label>Password:
                            <input type='text' name='password' onChange = {this.handleInputChange.bind(this, 'password')}/>
                        </label><br/>
                    <input type='submit' value='login'/>
                    </fieldset>
                </form>
            </div>
        )
    }
})

module.exports = Login

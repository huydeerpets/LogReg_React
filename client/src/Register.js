var React = require('react');

var Register = React.createClass({
    getInitialState: function(){
        return {
            username: null,
            email: null,
            password: null,
            confirm: null,
        }
    },
    register: function(e){
        e.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)
    },
    handleInputChange: function(key, event){
        var stateObj = this.state;
        stateObj[key] = event.target.value;
        // if(stateObj['password'] || stateObj['confirm']){
        //     stateObj['password'] = bcrypt.hashSync(stateObj['password'], bcrypt.genSaltSync(8));
        // }
        console.log(stateObj)
        this.setState(stateObj);
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.register} method='post'>
                    <fieldset>
                        <legend><h1>Register</h1></legend>
                        <label>Username:
                            <input type='text' name='username' onChange={this.handleInputChange.bind(this, 'username')}/>
                        </label><br/>
                        <label>Email:
                            <input type='text' name='email' onChange={this.handleInputChange.bind(this, 'email')}/>
                        </label><br/>
                        <label>Password:
                            <input type='password' name='password' onChange={this.handleInputChange.bind(this, 'password')}/>
                        </label><br/>
                        <label>Confirm Password:
                            <input type='password' name='confirm' onChange={this.handleInputChange.bind(this, 'confirm')}/>
                        </label><br/>
                        <input type='submit' value='register'/>
                    </fieldset>
                </form>
            </div>
        )
    }
})

module.exports = Register

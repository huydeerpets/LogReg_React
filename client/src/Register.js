import React from 'react'

export default React.createClass({
    getInitialState(){
        return {
            username: null,
            email: null,
            password: null,
            confirm: null,
        }
    },
    register(e){
        e.preventDefault()
        this.props.onSubmit(this.state)
    },
    handleInputChange(key, event){
        var stateObj = this.state;
        stateObj[key] = event.target.value;
        this.setState(stateObj);
    },
    render(){
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

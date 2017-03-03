import React from 'react'

export default React.createClass({
    getInitialState(){
        return {
            email: null,
            password: null
        }
    },
    login(e){
        e.preventDefault();
        this.props.onLogin(this.state)
    },
    handleInputChange(key, event){
        var stateObj = this.state;
        stateObj[key] = event.target.value;
        this.setState(stateObj)
    },
    render(){
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

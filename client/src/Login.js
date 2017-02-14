var React = require('react')

var Login = React.createClass({
    render: function(){
        return (
            <div>
                <form action='' method='post'>
                    <fieldset>
                        <legend> <h1>Login</h1> </legend>
                        <label>Email:
                            <input type='text' name='email'/>
                        </label><br/>
                        <label>Password:
                            <input type='text' name='password'/>
                        </label><br/>
                    <input type='submit' value='login'/>
                    </fieldset>
                </form>
            </div>
        )
    }
})

module.exports = Login

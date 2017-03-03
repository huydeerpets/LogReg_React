import {Router, Route, hashHistory} from 'react-router'
import {render} from 'react-dom'
import React from 'react'
import axios from 'axios'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'


var App = React.createClass({
    onRegister(data){
        axios.post('/register', data).then(function(response){
            if(response.data.status){
                hashHistory.push('/dashboard')
            } else {
                console.log(response.data.message)
            }
        })
    },
    onLogin(data){
        axios.post('/login', data).then(function(response){
            if(response.data.status){
                hashHistory.push('/dashboard')
            } else {
                console.log(response.data.message)
            }
        })
    },
    render(){
        return (
            <div>
                <Register onSubmit = {this.onRegister}/>
                <Login onLogin = {this.onLogin}/>
            </div>
        )
    }
})

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='/dashboard' component={Dashboard}/>
    </Router>
)

render( routes, document.getElementById('app'))

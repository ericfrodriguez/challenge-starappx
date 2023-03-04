import React from 'react'
import '../styles/LoginForm.css'

const LoginForm = () => {
    return (
        <div id='container'>
            <form action=''>
                <input type="text" name="mail" placeholder='Email'/><br/>
                <input type="password" name="password" placeholder='Password'/><br/>
                <input type="submit" title='LOGIN'/>
            </form>
        </div>
    )
}

export default LoginForm
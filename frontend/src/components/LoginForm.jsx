import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import '../styles/LoginForm.css'
import swal from 'sweetalert';

const LoginForm = () => {

    const [user, setUser] = useState({});

    let email = useRef('');
    let password = useRef('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            [email.current.name]: email.current.value,
            [password.current.name]: password.current.value
        }

        try {
            const resToken = await axios.post('http://localhost:8000/api/auth/login', data)
            localStorage.setItem('token', resToken.data.response.token)

            axios.get('http://localhost:8000/api/users/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                const {name, mail, username} = res.data.response.user;

                const text = `
                    email: ${mail}
                    username: ${username}
                `

                swal(`Welcome ${name}`, text);
            })

        } catch(err) {
            console.log(err)
        }

    }


    return (
        <div id='container'>
            <form action='' onSubmit={handleSubmit}>
                <input ref={email} type="text" name="mail" placeholder='Email' /><br />
                <input ref={password} type="password" name="password" placeholder='Password' /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    )

}

export default LoginForm
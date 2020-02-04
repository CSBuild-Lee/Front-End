import React, { useState } from 'react';
import axios from 'axios';

function Login() {

    const [creds, setCreds] = useState({ username: '', password: '' });

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/');
        })
        .catch(err => console.error(err));
    }

    return (
        <>
            {/* Do we need to pass error through props here? */}
            <div className="login-container">
                <form className="login" onSubmit={handleSubmit}>
                    <div className="inputs-container">
                        <label>Username</label>
                        <input 
                            id="username"
                            type="text"
                            name="username"
                            value={creds.username}
                            placeholder="Enter your username."
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            value={creds.password}
                            placeholder="Enter your password."
                            onChange={handleChange}
                        />
                        <button type="submit">Login to Play</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
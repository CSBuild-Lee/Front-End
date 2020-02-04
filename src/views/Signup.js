import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    
    const [creds, setCreds] = useState({ username: '', password: '' });

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/auth/signup', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/');
        })
        .catch(err => console.error(err));
    }
        
    return (
        <>
            <div className="signup-container">
                <form className="signup" onSubmit={handleSubmit}>
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
                        <button type="submit">Create Account and Game Away</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import bug from '../img/bug.png';

const FormHeader = styled.h2`
    text-align: center;
    margin-top: 40px;
    margin-bottom: -5px;
`

const FormContainer = styled.div`
    height: 100vh;
`

const Form = styled.form`
    display: flex;
`

const FormImg = styled.img`
    height: 80vh;
    margin-left: 40px;
    margin-top: 40px;
    margin-right: 160px;
`

const FlexContainer = styled.div`
`

const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
`

const InputLabel = styled.label`
    margin-top: 40px;
    margin-bottom: 10px;
    text-align: center;
`

const TextInput = styled.input`
    width: 25vw;
    height: 5vh;
    text-align: center;
    color: #207653;
    background: #FFEC00;
    border: 1px solid #86ED00;
`

const SubmitButton = styled.button`
    margin-top: 50px;
    color: white;
    background: #86ED00;
    border: 1px solid #207653;
    width: 25vw;
    height: 5vh;
`

const FormDescription = styled.p`
    text-align: center;
    margin-top: 50px;
`

function Signup() {
    
    const [creds, setCreds] = useState({ username: '', password1: '', password2: '' });

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://angry-bugs.herokuapp.com/rest-auth/registration/', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            window.location.href = '/login';
        })
        .catch(err => console.error(err));
    }
        
    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <FlexContainer>
                        <FormImg src={bug} />
                    </FlexContainer>
                    <FlexContainer>
                        <FormInputs>
                            <FormHeader>Angry Bugs</FormHeader>
                            <InputLabel>Username</InputLabel>
                            <TextInput 
                                id="username"
                                type="text"
                                name="username"
                                value={creds.username}
                                placeholder="Enter your username."
                                onChange={handleChange}
                            />
                            <InputLabel>Password</InputLabel>
                            <TextInput 
                                id="password"
                                type="password"
                                name="password1"
                                value={creds.password}
                                placeholder="Enter your password."
                                onChange={handleChange}
                            />
                            <InputLabel>Confirm Password</InputLabel>
                            <TextInput 
                                id="password"
                                type="password"
                                name="password2"
                                value={creds.password}
                                placeholder="Confirm your password."
                                onChange={handleChange}
                            />
                            <SubmitButton type="submit">Click Here to Play</SubmitButton>
                            <FormDescription>Create an account to save your best scores!</FormDescription>
                        </FormInputs>
                    </FlexContainer>
                </Form>
            </FormContainer>
        </>
    )
}

export default Signup;
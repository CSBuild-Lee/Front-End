import React, { useState } from 'react';
import styled from 'styled-components';
import bug from '../img/bug.png';

function Welcome() {

    const WelcomeContainer = styled.div`
        height: 100vh;
    `

    const IntroContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const IntroFlexContainer = styled.div`
        flex-direction: column;
    `

    const IntroImage = styled.img`
        height: 70vh;
        margin-top: 20px;
    `

    const WelcomeHeader = styled.h2`
        text-align: center;
        margin-top: 20px;
    `

    const WelcomeSubHeader = styled.h3`
        font-weight: bold;
        text-align: center;
    `

    const WelcomeText = styled.p`
        text-align: center;
        margin-bottom: 40px;
        margin-top: -15px;
    `

    const Divider = styled.hr`
    
    `

    const NameContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    const NameFlexContainer = styled.div`
        flex-direction: column;
    `

    const NameHeader = styled.h3`
        font-weight: bold;
        text-align: center;
    `

    const NameText = styled.p`
        text-align: center;
    `

    const NameInput = styled.input`
        background: #86ED00;
        color: white;
        width: 100%;
        height: 5vh;
        text-align: center;
    `

    const NameButton = styled.button`
        background: #86ED00;
        color: white;
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 5vh;
    `

    let [name, setName] = useState('');

    const handleChange = e => {
        setName(...name, [e.target.name] = e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // I've been debugging this for an hour and can only get it to show the first character. Will try again later.
        alert(`Your bug's name is ${name}`)
    }

    return (

        <WelcomeContainer>
            <IntroContainer>
                <IntroFlexContainer>
                    <IntroImage src={bug} />
                </IntroFlexContainer>
                <IntroFlexContainer>
                    <WelcomeHeader>THE ANGRY INSECT STRIKES BACK</WelcomeHeader>
                    <WelcomeSubHeader>YOU:</WelcomeSubHeader>
                        <WelcomeText>The hungriest, most ravenous bug on Earth.</WelcomeText>
                    <WelcomeSubHeader>YOUR ENEMY:</WelcomeSubHeader>
                        <WelcomeText>A coldhearted farmer who exterminated your entire family.</WelcomeText>
                    <WelcomeSubHeader>YOUR REVENGE:</WelcomeSubHeader>
                        <WelcomeText>Destroy his crops and transform into a beautiful butterfly.</WelcomeText>
                    <WelcomeSubHeader>THE TIME IS NOW:</WelcomeSubHeader>
                        <WelcomeText>Choose your insect and get your nom on!</WelcomeText>
                </IntroFlexContainer>
                <IntroFlexContainer>
                    <IntroImage src={bug} />
                </IntroFlexContainer>
            </IntroContainer>
            <Divider></Divider>
            <NameContainer>
                <NameFlexContainer>
                    <NameHeader>OPTION 1:</NameHeader>
                    <NameText>Choose a custom name that has special meaning to you and press the enter key.</NameText>
                    <form type="submit" onSubmit={handleSubmit}>
                    <NameInput name="name" placeholder="Enter your bug's name here." onChange={handleChange} {...name} ></NameInput>
                    </form>
                </NameFlexContainer>
                <NameFlexContainer>
                    <NameHeader>OPTION 2:</NameHeader>
                    <NameText>Click “randomize” and our algorithm will randomly assign you an amusing name.</NameText>
                    <NameButton>Randomize</NameButton>
                </NameFlexContainer>
            </NameContainer>
        </WelcomeContainer>

    )
}

export default Welcome;
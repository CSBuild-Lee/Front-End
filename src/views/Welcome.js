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

    let [customName, setCustomName] = useState('');
    let [randomName, setRandomName] = useState(getName());

    const handleChange = e => {
        console.log(e.target.value);
        setCustomName(...customName, [e.target.name] = e.target.value);
        console.log('Custom Name: ', customName);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // I've been debugging this for an hour and can only get it to show the first character. Will try again later.
        // alert(`Your bug's name is ${customName}`)
        console.log('Custom Name: ', customName);
        // Should this also redirect to instructions?
    }

    function randomize(arr) {
        // Calculate a random index based on array length
        const idx = Math.floor(Math.random() * arr.length);
        // Return the array value based on its [index]
        return arr[idx];
    }

    function getName() {
        let names = ["Marty McFly", "Catterthriller", "Amadeus Arachnid", "Alexander the Gnat", "Pestiroth", "Mothra", "Beetlejuice", "Papa Roach", "Buzz Kill", "The Terminiter"]
        return randomize(names);
    }

    function readInstructions() {
        let answer = window.confirm("Would you like to read the instructions first?")
        if (answer) {
        // Redirect to Instructions component
        }
        else {
        // Redirect to game
        }
    }

    const handleRandomSubmit = e => {
        e.preventDefault();
        setRandomName(getName());
        // First alert is always blank no matter how I write this syntax, hope that's not an issue with state...
        // alert(`Your bug's name is ${randomName}`)
        readInstructions();
        console.log('Random name: ', randomName)
        // Do we need to send them to instructions/game from here?
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
                {/* <NameFlexContainer>
                    <NameHeader>OPTION 1:</NameHeader>
                    <NameText>Choose a custom name that has special meaning to you and press the enter key.</NameText>
                    <form type="submit" onSubmit={handleSubmit}>
                    <NameInput 
                    type="text"
                    name="name"
                    // value={customName}
                    onChange={handleChange}
                    placeholder="Enter your bug's name here." 
                    />
                    </form>
                </NameFlexContainer> */}
                <NameFlexContainer>
                    <NameHeader>Ready to Play?</NameHeader>
                    <NameText>Click “randomize” and our algorithm will randomly assign you an amusing name.</NameText>
                    <form onSubmit={handleRandomSubmit}>
                    <NameButton type="submit">Randomize</NameButton>
                    </form>
                </NameFlexContainer>
            </NameContainer>
        </WelcomeContainer>

    )
}

export default Welcome;
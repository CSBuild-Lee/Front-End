import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bug from '../img/bug.png';

function Instructions() {

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
        margin-bottom: 35px;
        margin-top: -15px;
    `

    const WelcomeList = styled.div`
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    `

    const WelcomeListItem = styled.p`
        text-align: center;
    `

    const Divider = styled.hr`
    
    `

    const PlayContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const PlaySubHeader = styled.h3`
        text-align: center;
    `

    const PlayText = styled.p`
        text-align: center;
        margin-bottom: 0;
    `

    const PlayButton = styled.button`
        background: #86ED00;
        color: white;
        display: block;
        margin: 20px auto;
        width: 50%;
        border: 1px solid black;
        height: 5vh;
    `

    return (

        <WelcomeContainer>
            <IntroContainer>
                <IntroFlexContainer>
                    <IntroImage src={bug} />
                </IntroFlexContainer>
                <IntroFlexContainer>
                    <WelcomeHeader>THE ANGRY INSECT STRIKES BACK</WelcomeHeader>
                    <WelcomeSubHeader>YOUR MISSION:</WelcomeSubHeader>
                        <WelcomeText>Kill as many crops as possible before you turn into a butterfly.</WelcomeText>
                    <WelcomeSubHeader>YOUR OBSTACLE:</WelcomeSubHeader>
                        <WelcomeText>Your metamorphosis begins after consuming 3,000 calories. You must delay this process!</WelcomeText>
                    <WelcomeSubHeader>YOUR PLAN OF ATTACK:</WelcomeSubHeader>
                        <WelcomeText>To do max damage, start with light veggies (lettuce). Save starchy stuff (potatoes) for last.</WelcomeText>
                    <WelcomeSubHeader>YOUR NUTRITION FACTS:</WelcomeSubHeader>
                        <WelcomeList>
                            <WelcomeListItem>Lettuce: 5</WelcomeListItem>
                            <WelcomeListItem>Cucumber: 16</WelcomeListItem>
                            <WelcomeListItem>Tomato: 18</WelcomeListItem>
                            <WelcomeListItem>Eggplant: 20</WelcomeListItem>
                            <WelcomeListItem>Carrot: 25</WelcomeListItem>
                            <WelcomeListItem>Pepper: 30</WelcomeListItem>
                            <WelcomeListItem>Broccoli: 50</WelcomeListItem>
                            <WelcomeListItem>Corn: 85</WelcomeListItem>
                            <WelcomeListItem>Potato: 163</WelcomeListItem>
                            <WelcomeListItem>Yam: 177</WelcomeListItem>
                        </WelcomeList>
            {/* Add Link to Game Here */}
                </IntroFlexContainer>
                <IntroFlexContainer>
                    <IntroImage src={bug} />
                </IntroFlexContainer>
            </IntroContainer>
            <Divider></Divider>
            <PlayContainer>
                <PlaySubHeader>Understand the rules?</PlaySubHeader>
                <PlayText>Of course you do (they're easy!).</PlayText>
                <Link to="/"><PlayButton>Click Here to Play Now</PlayButton></Link>
            </PlayContainer>
        </WelcomeContainer>

    )
}

export default Instructions;
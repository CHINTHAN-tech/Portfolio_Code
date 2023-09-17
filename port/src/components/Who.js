import React from 'react'
import styled from 'styled-components'
import Chin from '../img/depo.jpg'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width:1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px){
  align-items: center;
    text-align: center;
}

`
const Right = styled.div`
  flex: 1;
  display:flex;
  flex-direction: column;
   justify-content: center;
   gap:20px;

   @media only screen and (max-width: 768px){
    align-items: center;
    text-align: center;
  }
`

const Des = styled.p`
font-size: 24px;
color: lightgray;

`;

const Button = styled.button`
background-color: #da4ea2;
color:white;
font-weight: 500;
width:120px;
padding:10px;
border:none;
border-radius: 5px;
cursor:pointer;
`;


     


const Line = styled.img`
height:5px;

`;

const WhatIDo = styled.div`
display: flex;
align-items: center;
gap:10px;

`;

const Subtitle = styled.h2`
color: #da4ea2

`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px){
    font-size: 60px;
  }

`;

const Bold = styled.p`
font-size: 34px;
`


const About = () => {
  return (
    <Section>
        
        <Container>
         <Left>
          
          <Bold>Highly skilled React Developer with 1 years of experience in building web applications.<br/>
           Strong proficiency in JavaScript, React, and related libraries and frameworks. 
           Demonstrated ability to develop clean and efficient code, solve complex problems, 
           and collaborate effectively in a team environment.</Bold>

         </Left>
         <Right>
            <Title>Think different and be different</Title>
            <WhatIDo>
                <Line src={Chin} />
                <Subtitle>self motivated and self made Front end developer</Subtitle>

            </WhatIDo>
            <Des>I design and develop with a a passion for the arts</Des>
            <Button>See my works</Button>

    

         </Right>
             
        </Container>
     
    </Section>
    
  )
}

export default About


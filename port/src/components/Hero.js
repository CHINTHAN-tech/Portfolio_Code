import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Chin from '../img/crun.jpeg'

const Section = styled.div`
  height: 120vh;
  scroll-snap-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px){
   height: 200vh;
}
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align:center;
  width:1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`
const Left = styled.div`
flex: 2;
display:flex;
flex-direction: column;
justify-content: center;
gap:20px;

@media only screen and (max-width: 768px){
  flex:1;
  align-items: center;
}


`
const Right = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width:1400px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 768px){
    flex:1;
    width:100%;
  }
`

const Des = styled.p`
font-size: 24px;
color: lightgray;

@media only screen and (max-width: 768px){
  padding:20px;
  text-align:center;
}

`;



const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top:0;
bottom: 0;
left:0
right:0;
margin:auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px){
  width: 300px;
  height:300px;
}
     
 @keyframes animate{
    to{
        transform: translateY(35px);
    }
 }



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
    text-align:center;
  }

`;
const Intro = styled.h1`
font-size: 20px;
color: pink;
padding:10px;
`


const Home = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
         <Left>
         <Intro>
            Hello I'm Chinthan and i'm a React js Developer welcome to my portfolio
          </Intro>
            <Title>Experimenting And Experiencing coding</Title>
            <WhatIDo>
                <Line />
                <Subtitle></Subtitle>
                <Des>I enjoy creating delightful UI design</Des>

            </WhatIDo>
           
            

         </Left>

         <Right>
            <Img src={Chin}/>

         </Right>
             
        </Container>
     
    </Section>
    
  )
}

export default Home

import React from 'react'
import styled from 'styled-components'

const data=[
  "HTML",
  "CSS",
  "JAVA SCRIPT",
  "React js"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display:flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width:100%;
    flex-direction: column;

  }
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content:center;

  @media only screen and (max-width: 768px){
    padding:20px;
    justify-content: center;
  }
`
const Right = styled.div`
  flex:1;
`
const List = styled.ul`
list-style: none;
display:flex;
flex-direction: column;
gap:10px;
  
`

const Subtitle = styled.h2`
color: #da4ea2

`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px){
    font-size: 24px;

    -webkit-text-stroke: 0px;
  }

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: red;
    width:0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText{
        to{
         width: 100%;
        }
      }
    }
  }
`

const Works = () => {
  return (
    <Section>
      
      <Container>
      <Subtitle>What are all i know</Subtitle>
        <Left>
        
          <List>
            {data.map(item=>(
               <ListItem key={item} text={item}>{item}</ListItem>

            ))}
           
          </List>

        </Left>
        <Right>
        
        </Right>
      </Container>
      
        
    </Section>
    
  )
}

export default Works
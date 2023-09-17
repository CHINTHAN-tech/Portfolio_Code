import React from 'react'
import styled from 'styled-components'
import Logoc from '../img/logoc.jpg'
import Sea from '../img/download.png'

const Section = styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width: 768px){
    width: 100%;
}

`

const Container = styled.div`
width:1400px;
display:flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;

@media only screen and (max-width: 768px){
    width: 100%;
    padding:10px;
}
`
const Links = styled.div`
display:flex;
align-items: center;
gap: 20px;
`;
const Logo = styled.img`

    height: 50px;
    
`;
const ListItem = styled.li`
cursor: pointer;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
    cursor: pointer;
`;
const Button = styled.button`
   width: 100px;
   padding: 10px;
   background-color: red;
   color:white;
   border:none;
   border-radius: 5px;
   cursor: pointer;
`;
const Icons = styled.div`
display:flex;
align-items: center;
gap: 20px;

`;
const List = styled.ul`
display:flex;
gap:20px;
list-style: none;

@media only screen and (max-width: 768px){
    display: none;
}
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src={Logoc}  alt=""/>
           
            <List>
                <ListItem>Scroll down for more information</ListItem>
                
            </List>
            </Links> 

            <Icons>
                <Icon src={Sea}/>
                <Button>Hire Now </Button>
            </Icons>
           

        </Container>
     
    </Section>
    
  )
}

export default Navbar

import React from "react";
import styled from "styled-components"



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;




const Bold = styled.p`
  font-size: 25px;

`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  
  
  return (
    <Section>
      <Container>
        <Left>
          <Form >
            <Title>Contact Me</Title>
            <Bold>Email: chinthan.v1997@gmail.com <br/> Phone Number: 7676322663</Bold>
            
           
          </Form>
        </Left>
        <Right>
          
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
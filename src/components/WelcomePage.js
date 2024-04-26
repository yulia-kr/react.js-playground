import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, #FFC0CB, #FF5733); /* Adjust colors as needed */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const WelcomePage = ({ username }) => {
  return (
    <Container>
      <Title>Welcome {username}!</Title>
    </Container>
  );
};

export default WelcomePage;

import React, { useState } from 'react';
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
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2em;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.1em;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #FF5733;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #FFC0CB;
  }
`;

const HomePage = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');

  const handleInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleSubmit = () => {
  
    const alphaRegex = /^[A-Za-z]+$/;

    if (!alphaRegex.test(usernameInput.trim())) {
      alert('Please enter a valid name with alphabetic characters only.');
      return;
    }

    setUsername(usernameInput.trim());
  };

  return (
    <Container>
      <Title>Hello Coders</Title>
      <Label htmlFor="nameInput">Write your name here:</Label>
      <Input
        id="nameInput"
        type="text"
        value={usernameInput}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default HomePage;

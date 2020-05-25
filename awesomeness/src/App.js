import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Anchor href="http://naver.com">Go to Naver</Anchor>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ecf0f1;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  &:active,
  &:focus {
    outline: none;
  }

  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;

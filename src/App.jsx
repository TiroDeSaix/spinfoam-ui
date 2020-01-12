import React from 'react';
import { ThemeProvider } from "styled-components"
import logo from './logo.svg';
import theme from "./theme"
import './App.css';

import Container from "./components/Container/FlexContainer"
import Button from "./components/Buttons/Button"
import FlexContainer from './components/Container/FlexContainer';

console.log(Button)

const App = (props) => {
  
  return(
        <FlexContainer>
          <Button whileHover={{scale: 1.4}} {...props}> Miko </Button>
          <Button> Osa</Button>
        </FlexContainer>
  )
}

export default App;

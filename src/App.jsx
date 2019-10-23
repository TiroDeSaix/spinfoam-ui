import React from 'react';
import { ThemeProvider } from "styled-components"
import logo from './logo.svg';
import theme from "./theme"
import './App.css';
import ButtonGroup from "./components/Buttons/ButtonGroup"
import Button from "./components/Buttons/Button"


const App = () => {
  
  return(
        <ButtonGroup direction="x">
          <Button />
          <Button />
        </ButtonGroup>
  )
}

export default App;

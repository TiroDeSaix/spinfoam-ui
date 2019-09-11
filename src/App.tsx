import React from 'react';
import { ThemeProvider } from "styled-components"
import logo from './logo.svg';
import theme from "./themes"
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>


    </ThemeProvider>
   
  )
}

export default App;

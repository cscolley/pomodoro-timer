import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import PomodoroTimer from './components/PomodoroTimer';
import Links from './components/Links';

function App() {
  return (
    <> 
      <PomodoroTimer />
      <Links />      
      <GlobalStyle />
    </>
  );
}

export default App;
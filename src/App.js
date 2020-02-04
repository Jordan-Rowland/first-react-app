import React from 'react';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"

function App() {
  return (
    <div className="App">
      <Header />
      <Body header="hello"/>
    </div>
  );
}

export default App;

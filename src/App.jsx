import React from 'react';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import CardList from "./components/CardList"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Body header="hello"/> */}
      <CardList />
    </div>
  );
}

export default App;

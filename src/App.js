import React from 'react';
import Header from './header/Header'
import Aside from './aside/Aside'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteiner">
        <Aside/>
      </div>
    </div>
  );
}

export default App;

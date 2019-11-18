import React from 'react';
import BackGround from './components/background/background.component';
import TitleType from './components/title/title.component';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* set the background */}
      <BackGround />
      {/* the header text */}
      <TitleType />
    </div>
    
  )
}

export default App;

import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/CounterGroup.js';

function App() {
  return (
    <div className="App">
      <CounterGroup defaultCounters={3}/>
    </div>
  );
}

export default App;

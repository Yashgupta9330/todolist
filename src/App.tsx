import React from 'react';
import './App.css';
import ItemList from './components/Item';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <ItemList />
    </div>
  );
};

export default App;

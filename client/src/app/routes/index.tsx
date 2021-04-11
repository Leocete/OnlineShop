import React from 'react';
import NavigationBar from '../components/NavigationBar';

const App = (): JSX.Element => {
  console.log("sdasdsad")
  return (
    <div className="app-wrapper">
      <header>
        <NavigationBar />
      </header>
    </div>
  );
};

export default App;

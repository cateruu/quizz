import React from 'react';
import Landing from './components/Landing';
import classes from './app.module.css';

const App = () => {
  return (
    <div className={classes.app}>
      <Landing />
    </div>
  );
};

export default App;

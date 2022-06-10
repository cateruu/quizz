import React from 'react';
import classes from './css/loading.module.css';

const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;

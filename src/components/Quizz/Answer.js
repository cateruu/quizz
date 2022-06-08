import React from 'react';
import classes from './answer.module.css';

const Answer = (props) => {
  return (
    <div className={classes.answer}>
      <span dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
};

export default Answer;

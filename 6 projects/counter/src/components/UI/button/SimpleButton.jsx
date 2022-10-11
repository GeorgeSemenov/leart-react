import React, {useState} from 'react';
import classes from './SimpleButton.module.css'

function SimpleButton({children,...props}) {
  return (
    <button 
      className={
        children == '+'
        ? classes.plus
        : classes.minus
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default SimpleButton;

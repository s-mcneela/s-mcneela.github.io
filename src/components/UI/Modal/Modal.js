
import React from 'react';

import classes from './Modal.module.css';


const modal = props => {
  
  return (
    <nav className={classes.Modal}>
      {props.children}
    </nav>
  );

}

export default modal;
import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
  <div className={classes.Main}>
    <button className={classes.Button} onClick={props.toggleModalMethod}>Menu</button>
    <nav className={classes.NavBar}>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import Aux from '../../../hoc/Aux';


import classes from './NavigationItems.module.css';


const navigationItems = (props) => {
  return (
  <Aux>
   
      <ul className={classes.navLinks}>
        
        <NavigationItem isActive={() => false} link='/'>
          <div className={classes.LinkTab}>
            <p>Home</p>
          </div>
        </NavigationItem>
      
        <NavigationItem link='/work/'>
          <div className={classes.LinkTab}>
            <p>Work</p>
          </div>
        </NavigationItem>
        <NavigationItem link='/blog/'>
          <div className={classes.LinkTab}>
            <p>Blog</p>
          </div>
        </NavigationItem>
        <NavigationItem link='/about/'>
          <div className={classes.LinkTab}>
            <p>About</p>
          </div>
        </NavigationItem>
      </ul>
  
  </Aux>
  );
};

export default navigationItems;
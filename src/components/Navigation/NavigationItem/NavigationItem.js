import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
//note: when naming css classes in react, you CANNOT use dashes

const navigationItem = (props) => (
  <li className={classes.nav_link_list}>
    <NavLink 
    className={classes.nav_link}
    isActive={props.isActive}
    to={props.link}
    activeClassName={classes.Active}
    >{props.children}</NavLink>

  </li>
);

export default navigationItem;
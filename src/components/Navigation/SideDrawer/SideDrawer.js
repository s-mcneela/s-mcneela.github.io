import React from 'react';

import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = (props) => {

  return (
    <div className={classes.SideDrawer}>
      <Backdrop toggleModalMethod={props.toggleModalMethod} />
      <Modal >
        <NavigationItems toggleModalMethod={props.toggleModalMethod}/>
      </Modal>
    </div>
  );
};

export default sideDrawer;
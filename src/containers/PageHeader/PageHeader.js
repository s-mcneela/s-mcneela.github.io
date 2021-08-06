import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './PageHeader.module.css';

// moved the side drawer open/closed state into here (a separate component) 
//instead of parent component so the the whole page component wouldn't update every time the 
//the side drawer is toggled

class PageHeader extends Component {

  state = {
    sideDrawerOpen: false,
  }


  toggleModal = () => {
    this.setState((state) => {
      return {
        ...state,
        sideDrawerOpen: !state.sideDrawerOpen,
      }
    });
  }

  clearModal = () => {
    this.setState((state) => {
      return {
        ...state,
        sideDrawerOpen: false,
      }
    });
  }

  componentDidMount = () => {
    this.clearModal();
  }
    
    
  
  render() {
    return ( 
      <header className={classes.Header}>
        {this.state.sideDrawerOpen ? <SideDrawer toggleModalMethod={this.toggleModal} /> : null }
        <Toolbar toggleModalMethod={this.toggleModal} />
      
      </header>
          

    )
  }

}

export default PageHeader; 
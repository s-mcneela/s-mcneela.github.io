
import React, {Component} from 'react';

import PageHeader from '../PageHeader/PageHeader';
import Aux from '../../hoc/Aux';
import classes from './HomePage.module.css';



class HomePage extends Component {
  state = {
    entered: false,
  }

  enter = () => {
    this.setState(state => 
      {
        return {
          ...state,
          entered: true,
        }
      });
  }

  render(){
    return (
      <Aux>
        <PageHeader />
        <div className={classes.Heading}>
          <h1>Hello and Welcome</h1>
        </div>
        <div className={classes.Main}>
         
          <div className = {classes.IntroBlurb}>
            
            <div>
              <h2>My name is Stephen</h2>
              <p>
                I have a degree in Mechanical Engineering with training in software and math.
                I like to dabble in various computer science 
                topics, most recently API development and mathematical/statistical programming.
              </p>
              
            </div>
            
          </div>
          <div className={classes.CTA}>
            <p>
              Please feel free to browse the site and look at some
              of the projects I've worked on (this site is one of them!).
             
            </p>
            <p> 
              Be sure to check out the blog section, where I give some helpful
              tips on JavaScript, React, Django, and CSS....things that would've 
              saved me a lot of time when I was first learning!
            </p>
          </div>
       
        
        </div>

      </Aux>
    )

  }

 }

 export default HomePage;
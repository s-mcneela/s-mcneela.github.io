
import React, {Component} from 'react';

import PageHeader from '../PageHeader/PageHeader';
import Aux from '../../hoc/Aux';
import classes from './HomePage.module.css';
import ContactTag from '../../components/UI/ContactTag/ContactTag';



class HomePage extends Component {
  state = {
    showBackdrop: false,
  }

  componentDidMount() {
    //must add event listeners after all the DOM elements are mounted
    const intro_blurb = document.getElementById('intro_blurb');
    intro_blurb.addEventListener('mouseenter', e => {
      this.onObjEnter(intro_blurb);
    });
    intro_blurb.addEventListener('mouseleave', e => {
      this.onObjExit(intro_blurb);
    });
    const cta = document.getElementById('CTA');
    cta.addEventListener('mouseenter', e => {
      this.onObjEnter(cta);
    });
    cta.addEventListener('mouseleave', e => {
      this.onObjExit(cta);
    });
  }

  onObjEnter = (obj) => {
    obj.style.zIndex = 3;
    this.setState(state => {
      return {
        ...state,
        showBackdrop: true,
      }
    });
  }
  onObjExit = (obj) => {
    obj.style.zIndex = 1;
    this.setState(state => {
      return {
        ...state,
        showBackdrop: false,
      }
    });
  }
  render(){
    
      
    return (
      <Aux>
        <PageHeader/>
        <div className={classes.TopPageFiller} ></div>
        <div className={classes.Heading}>
          <h1>Welcome!</h1>
        </div>
        <div className={classes.Main}>
          
          {this.state.showBackdrop? <div id="backdrop" className={classes.Backdrop} > </div> : null}
         
          <div id="intro_blurb" className = {classes.IntroBlurb}>
            
            <div>
              <h2>My name is Stephen</h2>
              <p>
                I have a degree in Mechanical Engineering with training in software and math.
                I like to dabble in various computer science 
                topics, most recently API development and mathematical/statistical programming.
              </p>
              
            </div>
            
          </div>
          <div id="CTA" className={classes.CTA}>
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
        <ContactTag />
        <div className={classes.PageFiller}> </div>

      </Aux>
    )

  }

 }

 export default HomePage;
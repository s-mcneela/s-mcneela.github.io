
import React, {Component} from 'react';

import PageHeader from '../PageHeader/PageHeader';
import Aux from '../../hoc/Aux';
import classes from './HomePage.module.css';
import ContactTag from '../../components/UI/ContactTag/ContactTag';
import {isBrowser} from 'react-device-detect';



class HomePage extends Component {
  state = {
    showBackdrop: false,
  }

  componentDidMount() {
    //must add event listeners after all the DOM elements are mounted
    const intro_blurb = document.getElementById('intro_blurb');
    if(isBrowser){

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
              <h2>
                Hi, my name is Stephen! This is my personal portfolio site and blog. 
                If you're interested in learning more about how I designed and built this site,
                feel free to email me at stephen.mcneela1@gmail.com 

              </h2>
              <p>
                I recently graudated with a degree in Mechanical Engineering and Minor in Math. A few years ago I also
                became interested in coding, and took several computer science courses to boost my skills there, in addition
                to working on my own projects.
                I like to dabble in various computer science 
                topics and expand my knowledge whenever possible. Most recently I've been doing lots of API development 
                and User Interface design, as well as diving into topics in Machine Learning.
              </p>
              
            </div>
            
          </div>
          <div id="CTA" className={classes.CTA}>
            <p>
              Please feel free to browse the site and look at some
              of the projects I've worked on (this site is one of them!).
              I built this site from scratch (using React as a framework, of course).
              The User Interface design is my own, styled with pure CSS (no CSS libraries)
              ...I find this approach provides the most control when building interfaces.  
             
            </p>
            <p> 
              Be sure to check out the blog section, where I give some helpful
              tips on JavaScript, React, Django, and CSS....things that would've 
              saved me a lot of time when I first started programming. I hope they help 
              anyone who is in the process of learning to code. 
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
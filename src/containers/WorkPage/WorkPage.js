
import React, {Component} from 'react';

import PageHeader from '../PageHeader/PageHeader';
import Aux from '../../hoc/Aux';
import classes from './WorkPage.module.css';
import ContactTag from '../../components/UI/ContactTag/ContactTag';
import trainingSitePic1 from '../../assets/images/training-site1.png';
import trainingSitePic2 from '../../assets/images/training-site2.png';
import trainingSitePic3 from '../../assets/images/training-site3.png';
import trainingSitePic4 from '../../assets/images/training-site4.png';
import beachMonitor1 from '../../assets/images/beach-monitor1.png';
import beachMonitor2 from '../../assets/images/beach-monitor2.png';
import {isBrowser} from 'react-device-detect';

class WorkPage extends Component {
  state = {
    showBackdrop: false,
  }

  componentDidMount() {
    //must add event listeners after all the DOM elements are mounted
    const intro_blurb = document.getElementById('intro_blurb');
    if(isBrowser){
      console.log(window.screen.width);

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
          <h1>Stephen's Software Work Samples</h1>
        </div>
        <div className={classes.Main}>
          
          {this.state.showBackdrop? <div id="backdrop" className={classes.Backdrop} > </div> : null}
         
          <div id="intro_blurb" className = {classes.IntroBlurb}>
            
            <div>
              <h2>Website for Personal Fitness Training Business</h2>
              <p>
              For a client who was running a small personal training business, I built a web page (both front and back end) to advertise the service. 
              It included a Home page, Contacts Page, About Page, Services Pricing Page, as well as a Workouts Page, 
              where the client could upload individual workout plans, along with their corresponding 'difficulty ratings' as well as a description. 
              </p> 
              <p> 
              I utilized ReactJS and 
              Django web frameworks for front end and back end development. Django REST framework was used to build API endpoints for accessing the database
              the database (which was managed with PostgreSQL). All styling was done by me using pure CSS. I utilized responsive web design to ensure consistent
              styling from desktop to mobile devices. Notable features include the ability for the user to filter workouts based on difficulty level, and a 
              continuously rotating banner of testimonials on the front page of the site which required complex use of stateful React components.
              </p>
              <em><p>Click and hold images to enlarge</p></em>
              <div className={classes.LeftImageContainer}>
                <img className={classes.TrainingSitePic1} src={trainingSitePic1} alt='picture of my training website'/>
                <img className={classes.TrainingSitePic2} src={trainingSitePic2} alt='picture of my training website'/>
                <img className={classes.TrainingSitePic3} src={trainingSitePic3} alt='picture of my training website'/>
                <img className={classes.TrainingSitePic4} src={trainingSitePic4} alt='picture of my training website'/>
              </div>
              
            </div>
            
          </div>
          <div id="CTA" className={classes.CTA}>
            <h2>Machine Learning System for Detection of Ocean Swimmers and Surfers</h2>
            <p>
            I utilized the PyTorch Machine Learning library with a Resnet-50 object detection model 
            pretrained on Google’s COCO 2017 dataset to detect swimmers and surfers on San Diego 
            beaches as part of a larger project to create a system for lifeguards to more easily 
            monitor beaches.
            </p>
            <em><p>Click and hold images to enlarge</p></em>
            <div className={classes.RightImageContainer}>
              <img className={classes.BeachMonitor1} src={beachMonitor1} alt='picture of my machine learning beach monitor object detection in action'/>
              <img className={classes.BeachMonitor2} src={beachMonitor2} alt='picture of my machine learning beach monitor object detection in action'/>
            </div>
          </div>
        </div>
        <ContactTag />
        <div className={classes.PageFiller}> </div>

      </Aux>
    )

  }

 }

 export default WorkPage;
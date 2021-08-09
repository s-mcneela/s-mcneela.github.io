
import React, {Component} from 'react';
import BlogPostSummary from '../BlogPostSummary/BlogPostSummary';

import PageHeader from '../PageHeader/PageHeader';
import Aux from '../../hoc/Aux';
import classes from './BlogPage.module.css';
import ContactTag from '../../components/UI/ContactTag/ContactTag';
import {isBrowser} from 'react-device-detect';

let postImage1 = 'postimage1.jpg';//must be path from BlogPostSummary Component where it will be rendered, NOT this component
let postImage2 = 'postimage2.jpg';
let postColor1 = 'rgb(255, 97, 6)';
let postColor2 = 'white';

class BlogPage extends Component {
  state = {
    showBackdrop: false,
  }

  componentDidMount() {
    //must add event listeners after all the DOM elements are mounted
    // const intro_blurb = document.getElementById('intro_blurb');
    // if(isBrowser){
    //   console.log(window.screen.width);

    //   intro_blurb.addEventListener('mouseenter', e => {
    //     this.onObjEnter(intro_blurb);
    //   });
    //   intro_blurb.addEventListener('mouseleave', e => {
    //     this.onObjExit(intro_blurb);
    //   });
    //   const cta = document.getElementById('CTA');
    //   cta.addEventListener('mouseenter', e => {
    //     this.onObjEnter(cta);
    //   });
    //   cta.addEventListener('mouseleave', e => {
    //     this.onObjExit(cta);
    //   });
    // }
  
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
          <h1>The Coding Blog</h1>
        </div>
        <div className={classes.Intro} >
          <p>Please browse some of my tutorials below.
            They provide helpful tips on various coding 
            topics like Django, Django Rest Framework, 
            React, and CSS. 
          </p>
        </div>
        <div className={classes.HorizontalBar}></div>
        <div className={classes.Main}> {/*hold list of BlogSummary(s) */}

          {this.state.showBackdrop? <div id="backdrop" className={classes.Backdrop} > </div> : null}
          <BlogPostSummary id="blogPost1" imgSrc={postImage1} title='CSS: Using Nested FlexBoxes' borderColor= {postColor1} linkTo='1'/>
          <BlogPostSummary id="blogPost2" imgSrc={postImage2} title="React: When To Turn An Object Into A Reusable Component, and How To Pass Props 'Prop'erly" borderColor={postColor2}/>
        
        </div>


        <ContactTag />
        <div className={classes.PageFiller}> </div>

      </Aux>
    )

  }

 }

 export default BlogPage;
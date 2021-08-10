
import React, {Component} from 'react';

import PageHeader from '../../PageHeader/PageHeader';
import Aux from '../../../hoc/Aux';
import classes from './BlogPost1.module.css';
import ContactTag from '../../../components/UI/ContactTag/ContactTag';
import {isBrowser} from 'react-device-detect';
import postImage1 from '../../../assets/images/postimage1.jpg';
import htmlImage1 from '../../../assets/images/BlogPostImages1/blogpost1-html.png';
import cssImage1 from '../../../assets/images/BlogPostImages1/blogpost1-css1.png';
import cssImage2 from '../../../assets/images/BlogPostImages1/blogpost1-css2.png';


class BlogPost1 extends Component {
  
  componentDidMount() {
    
  }

  render(){
      
    return (
      <Aux>
        <PageHeader/>
        <div className={classes.TopPageFiller} ></div>
        <div className={classes.Heading}>
          <h1>CSS: Using Nested FlexBoxes!</h1>
        </div>
        <div className={classes.Main}>
         
          <div id="body" className = {classes.Body}>
            <h2>Nested FlexBoxes allow you to make complex layouts in a grid-like fashion 
              without using CSS grid. 
            </h2>
            <img id="image1" src={postImage1} className={classes.Image1} />
            <p>
              CSS grid is a great choice but is generally more complicated to set up 
              than flexbox, and more rigid (less responsive in that there is no element wrapping ability).
              Nested FlexBoxes can give you a similar grid-like layout. 
              As you probably already know, assigning 'display: flex' to a containing element (often a surrounding <code> div </code>)
                allows you to layout 
              its child elements in an ordered fashion within it.
              You can also align these elements to some degree within the container using properties like justify-content
              and align-items. However, FlexBox can only distribute elements in one direction, either 
              horizontally (row) or vertically (column). In order to create a grid-like element layout, 
              you'll need to nest multiple FlexBoxes within a containing FlexBox. 
              Say I'm trying to create the following layout... 
            </p>


            <div className={classes.Example1}>
              <div className={classes.Example1_Box1}>
                <div className={classes.Example1_Box1_Child1}>Block 1</div>
                <div className={classes.Example1_Box1_Child2}>Block 2</div>
              </div>
              <div className={classes.Example1_Box1}>
                <div className={classes.Example1_Box2_Child1}>Block 3</div>
                <div className={classes.Example1_Box2_Child2}>Block 4</div>
              </div>
            </div>
              
            <p>
              This layout was created using an outer FlexBox with flex-direction set 
              to row. Within that FlexBox are two more FlexBoxes, with flex-direction 
              set to column. Inside those two FlexBoxes are the actual colored blocks.
              In this case, setting up CSS grid may have been a similar amount of work, 
              but you still get some of the nice features of FlexBox like wrapping of 
              elements on smaller screens, and easy alignment of elements with align-items
              and justify-content.
            </p>
            <p>
              The HTML could look something like the following:
            </p>
            <img id="htmlImage1" src={htmlImage1} className={classes.HtmlImage1} />
            <p>
              While the CSS would be something like:
            </p>
            <img id="cssImage1" src={cssImage1} className={classes.CssImage1} />
            <img id="cssImage2" src={cssImage2} className={classes.CssImage2} />

            
          </div>
        </div>
        <ContactTag />
        <div className={classes.PageFiller}> </div>

      </Aux>
    )

  }

 }

 export default BlogPost1;
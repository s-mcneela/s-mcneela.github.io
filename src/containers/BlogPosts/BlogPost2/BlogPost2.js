
import React, {Component} from 'react';

import PageHeader from '../../PageHeader/PageHeader';
import Aux from '../../../hoc/Aux';
import classes from './BlogPost2.module.css';
import ContactTag from '../../../components/UI/ContactTag/ContactTag';
import {isBrowser} from 'react-device-detect';
import postImage1 from '../../../assets/images/postimage2.jpg';
import htmlImage1 from '../../../assets/images/BlogPostImages2/blogpost2-html1.png';
import htmlImage2 from '../../../assets/images/BlogPostImages2/blogpost2-html2.png';

// import cssImage1 from '../../../assets/images/BlogPostImages1/blogpost1-css1.png';
// import cssImage2 from '../../../assets/images/BlogPostImages1/blogpost1-css2.png';


class BlogPost1 extends Component {
  
  componentDidMount() {
    
  }

  render(){
      
    return (
      <Aux>
        <PageHeader/>
        <div className={classes.TopPageFiller} ></div>
        <div className={classes.Heading}>
          <h1>React: When To Turn An Object Into A Reusable Component, and How To Pass Props 'Prop'erly </h1>
        </div>
        <div className={classes.Main}>
         
          <div id="body" className = {classes.Body}>
            <h2>Generally speaking, you should make a component reusable when you are using the same 
              data and user interface structure many times over. 
            </h2>
            <img id="image1" src={postImage1} className={classes.Image1} />
            <p>
              But first, what does it mean to make a component reusable? Essentially, there are two ways you can create elements
              on your React page [by React page, I mean a JavaScript file representing, say, a page on a website]. 
              You can either write the HTML for an element DIRECTLY into the surrounding React page, or you
              can create a separate JavaScript file for that element, and subsequently import and embed that
              element into the original React page. Once the element has been created in a separate file and imported, we say that
              that element is now a reusable React COMPONENT. It's reusable beause in order to use it on another one of our React 
              pages, all we need to do is import it into that page (the page's .js file). We can even render the same external 
              component multiple times on a single React page. This is the beauty of reusability in React. Instead of having to 
              rewrite the code multiple times for elements that look and behave the same, we can turn them into a separate component
              and render them on our page repeatedly, and with ease. 
            </p>
            <p>
              But how do you know when you should switch from writing code directly in your React page, to moving that code
              into another file and creating a component out of it? Well, as with most things in computer science, 
               if you find yourself writing the same HTML code over and over, it's probably a good idea to create a component
               out of it. This is to save you from wasting time rewriting code, as well as making your code clearer (seeing a 
               named component rendered multiple times is much clearer than seeing a jumble of copied code). 
            </p>
            <p>
              However, don't be too eager to move your code out into components. If you only repeat your code once or twice, it's 
              not really worth it to create and import a separate component. It adds a level of complexity that's unnecessary. Also, 
              you should only create a component if the code you are repeating is almost identical each time you repeat it. This is 
              because components are fairly rigid. It's hard to make different variations of the same component. The only way you 
              can customize a component from one instance of it to another is by passing it different properties, and using those 
              properties in the component code. Let's take a look at the code I used to represent each blog post in my list of
              posts on the /blog page of this very website.  
            </p>

            <img id="htmlImage1" src={htmlImage1} className={classes.HtmlImage1} />
            <p>
              As you can see, each time I render the blog post listing, it has the same HTML structure: an outer React 
              router link tag, then a containing div, followed by
               an inner paragraph tag (that holds the title of the post), as well as an img tag, to hold the very 
              eye-catching main image for the post. This structure does not change for each blog post I want to list. 
              However, I need to be able to change the Link path for each post listing, so that each one will direct to 
              the correct post page, that corresponds to its listed title. Each post listing also needs to have a unique 
              title, and path to the image for the source. All of these things can be passed with React component 
              properties (props for short). I have a linkTo prop, which holds the end path of the route this post needs
              to link to. I have an imgSrc prop, which holds the path to the image for the post (held in a separate images 
              folder), so it can be loaded in the component using JS's require feature. I also have a title prop which holds
              the title for this post. Finally, I have a borderColor prop, which, with some clever use of JS element selectors, 
              can be used to alter the components CSS to make it's border a unique color. 
            </p>
            <p>
              This is how these props get passed to this component when I actually render the component on another page:
            </p>
            <img id="htmlImage2" src={htmlImage2} className={classes.HtmlImage2} />
            <p>
              As you can see, the more you want to customize each instance of your component, the more props you'll need to pass.
              It can get complicated quickly, so be careful. Components are not always necessary, and it's perfectly fine to write 
              code directly into your React site pages. However, if you find yourself repeating the same code multiple times,
              it may be time to put that code into a separate component. 
            </p>
          
            
          </div>
        </div>
        <ContactTag />
        <div className={classes.PageFiller}> </div>

      </Aux>
    )

  }

 }

 export default BlogPost1;
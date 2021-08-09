
import React, {Component} from 'react';
//made this a component so we can use componendDidMount(), so we can target DOM 
//elements AFTER they render, doesn't seem to be possible in functional components because they don't have componenet did Mount
import classes from './BlogPostSummary.module.css';

class BlogPostSummary extends Component {
  componentDidMount() {
    let currentEl = document.getElementById(this.props.id);
    currentEl.style.border = `2px solid ${this.props.borderColor}`;
  }
  render(){
    console.log(this.props.imgSrc);

    return (
      <div id={this.props.id} className={classes.Main}>
      {/*this id MUST be unique to the element...otherwise, even though each 
      instance of this component is unique, they'll have the same ID if we set it as a constant...
      the ID must be dynamic so it's unique for every instance of this class(component),
       so your document.getElementById's in 
      componentDidMount won't work!!!!!!...we can just use the same ID we give each BlogPostSummary 
      in the BlogPage component,...it gets passed down as a prop anywya and we'll ensure it's unique */}
      <p>{this.props.title}</p>
      <img className={classes.MainImage} src={require(`../../assets/images/${this.props.imgSrc}`).default} /> 
      {/*normally, we would import the image at the top of the page 
       and require wouldn't be needed, however since we're passed the image path
       in props, we need to use require within the body of the component to get the 
      image on the fly*/}
    </div>
  );
}

}

export default BlogPostSummary;
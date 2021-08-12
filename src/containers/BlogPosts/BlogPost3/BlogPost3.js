
import React, {Component} from 'react';

import PageHeader from '../../PageHeader/PageHeader';
import Aux from '../../../hoc/Aux';
import classes from './BlogPost3.module.css';
import ContactTag from '../../../components/UI/ContactTag/ContactTag';
import {isBrowser} from 'react-device-detect';
import postImage1 from '../../../assets/images/postimage3.jpg';
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
          <h1>Django Rest Framework: What Are Serializers, Why Are They Necessary, And How Do We Use Them?</h1>
        </div>
        <div className={classes.Main}>
         
          <div id="body" className = {classes.Body}>
            <h2>
              In simple terms, serializers allow us to convert objects between native python types and a form that can be used by our database.
            </h2>
            <img id="image1" src={postImage1} className={classes.Image1} />
            <p>
              Let's setup the scene here. Imagine you are building a website where users can create accounts and post on a blog.
              You are using Django as your backend framework. In Django, you will need to create models to represent the data your
              clients will be creating and working with as they navigate your site. Django models are a topic for another article, 
              but basically they allow you to group data into recognizable and structured chunks. For example, you would likely have 
              a User model in Django, to hold a user's personal information like: email address, first and last name, date joined, etc.
              You would probably also have a BlogPost model, to represent the data that would go along with a blog post, like: date 
              posted, title, body, and owner (whoever posted it). Now, instances of these models (and the data that goes with them) 
              would be stored in your database. When you want to display a post on the frontend of your site, you'll need to find a way
              to 'fetch' it along with its data. This is usually done with an HTTP request, and this is where an API is needed. 
              An API connects your database to your frontend by providing routes where the frontend can request data from the database.
              Django Rest Framework (DRF) is a great choice for implementing an API, and much of the work will be done in what are called DRF 
              views (each API route, along with its HTTP method, will be mapped to a unique DRF view that handles it appropriately).
            </p>
            <p>
              So why do we need serializers? Well, in your DRF views, you'll take in an HTTP request, 
              and query the desired objects from your database (perhaps you'll query, say, a user's most recent Blog Post).
              The problem is, the result returned by the database query is not in a form that's usable to the frontend. 
              The returned data also cannot be edited with Python code. Calling a 
              DRF serializer on the queried Blog Post, however, CONVERTS the object from its queried form to native Python types. At this point, you ARE free 
              to edit it with Python code, and can return its data in JSON format in an HTTP response to the frontend. There, you can finally render it on the user's screen.
            </p>
            <p>
              This would be implemented in code as the following (in your DRF views.py file):
            </p>
            <p className={classes.CodeExample1}>
              queried_blog_post = BlogPost.objects.get(pk=pk) #queries the database for the correct post, note: pk is provided automatically by DRF view function 
              serializer = BlogPostSerializer(queried_blog_post) # call the serializer function on the queried database object
              serialized_post = serializer.data #the actual data is stored in the serializer's data attribute
              # edit data in serialized_post as you wish #   
              post_json = JSONRenderer().render(serialized_post) #convert serialized_post from Python type to JSON format
              return Response(data="blogpost": post_json, status=status.HTTP_200_OK)
            </p>

            <p> 
              That previous example was an instance of <em>outbound serialization</em> (taking data from the database and serializing it before sending it OUT to the frontend).
              But serializers are also used when data is being put INTO the database. Say, instead of fetching a blog post, you wanted to create a blog post using data 
              submitted by the user on the frontend. Once again, you'd pass this data to your DRF view through an HTTP request. However, this time, instead of using 
              your serializer to convert from a queried object to native Python types, you're doing the opposite. You're converting the data submitted by the user, 
              which is effectively already available in native python format, and you're converting it to a form that can be saved to the database. To do that 
              your code would look like this: 
            </p>
            <p>Inbound Serialization</p>
            <p className={classes.CodeExample2}>
              post_data = request.data #request is automatically available in DRF views, and contains any data payload passed with the HTTP request from the frontend
              serializer = BlogPostSerializer(post_data) #call the serializer on the data from the HTTP request 
              serializer.is_valid() # must call this function to ensure the data is is_valid
              serializer.save() # actually saves the data to the database 
            </p>
            <p> 
              In those four lines of code, we took our data that was stored in request.data (and already useable in Python), we serialized
              it into a format that is useable by the database, and then we saved the data to the database as an instance of our BlogPost model.
            </p>
            <p>
              There may be instances where you use serializers twice in one DRF view. Say you want to query a Blog Post from the database, 
              edit it a bit, then resave it to the database. Well, in that case, you'd need to call the serializer twice, once after querying
              the post from the database, and again before saving it back to the database. In that instance, you are doing both outbound and 
              inbound serialization. Please note that outboud and inbound are not standardized terms used to describe serialization. You probably 
              won't find them used anywhere else on the internet. 
            </p>
            <p>
              So what did we learn here? Serializers act as the intermediary between our database and our Python code. They must be used whenever
              we query objects from the database to make their data workable, and whenever we wish to save an object to the database. 
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
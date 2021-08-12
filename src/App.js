import './App.css';
import HomePage from './containers/HomePage/HomePage';
import WorkPage from './containers/WorkPage/WorkPage';
import BlogPage from './containers/BlogPage/BlogPage';
import BlogPost1 from './containers/BlogPosts/BlogPost1/BlogPost1';
import BlogPost2 from './containers/BlogPosts/BlogPost2/BlogPost2';
import BlogPost3 from './containers/BlogPosts/BlogPost3/BlogPost3';
import {Route, Switch} from 'react-router-dom';
import Background from './components/UI/Background/Background';
import Aux from './hoc/Aux';
function App() {
  return (
    <Aux>
      
        <Background>
          <Switch>

            <Route path="/" exact render ={(props) => <HomePage />} />
            <Route path="/work/" exact render={(props)=> <WorkPage  /> } />
            <Route path="/blog/" exact render={(props)=> <BlogPage  /> } />
            <Route path="/blog/1/" exact render={(props)=> <BlogPost1  /> } />
            <Route path="/blog/2/" exact render={(props)=> <BlogPost2  /> } />
            <Route path="/blog/3/" exact render={(props)=> <BlogPost3  /> } />
            <Route path="/about/" exact render={(props)=> <HomePage  /> } />
          </Switch>
        </Background>

      
    </Aux>
    
  );
}

export default App;

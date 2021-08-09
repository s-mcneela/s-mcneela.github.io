import './App.css';
import HomePage from './containers/HomePage/HomePage';
import WorkPage from './containers/WorkPage/WorkPage';
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
            <Route path="/blog/" exact render={(props)=> <HomePage  /> } />
            <Route path="/about/" exact render={(props)=> <HomePage  /> } />
          </Switch>
        </Background>

      
    </Aux>
    
  );
}

export default App;

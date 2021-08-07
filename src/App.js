import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom';
import Background from './components/UI/Background/Background';
import Aux from './hoc/Aux';
function App() {
  return (
    <Aux>
      
        <Background>
          <Switch>

            <Route path="/" render ={(props) => <HomePage />} />
            <Route path="/work/" exact render={(props)=> <HomePage  /> } />
            <Route path="/blog/" exact render={(props)=> <HomePage  /> } />
            <Route path="/about/" exact render={(props)=> <HomePage  /> } />
          </Switch>
        </Background>

      
    </Aux>
    
  );
}

export default App;

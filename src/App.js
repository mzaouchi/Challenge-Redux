import './App.css';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Login';
import { useSelector } from 'react-redux';

function App() {

  const logginU = useSelector(state => state.loggin);
  return (
   <div>
     
      <Container >

            <br/>
        
            <Route exact path="/">
              {logginU ? <Redirect to="/Home" /> : <Login />}
            </Route>

            <Route exact path="/Home">
              {logginU ? <Home />: <Redirect to="/" /> }
            </Route>    
        
        </Container>

   </div>

        );
  } 

export default App;


import React from 'react'
import Navigation from './components/common/navigations';
import {BrowserRouter as Router, Switch, Routes,Route,Redirect} from 'react-router-dom'
import PageRenderer from './page-renderer';
import Home from './pages/home';

function App() {
   const user = {
     firstName: 'Cyrus',
     lastName: 'Chan'
}


  return (
    <Router>
    <div className="App">
      <Navigation user={user}/>
      <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to= "/home" />} />
          <Route component={() => 404} /> 
      </Switch> 
     </div>
    </Router>
  ); 
}

export default App;
  
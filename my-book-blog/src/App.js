
import React from 'react'
import Navigation from './components/navigations';
import {BrowserRouter as Router, Switch, Routes,Route,Redirect} from 'react-router-dom'
import PageRenderer from './page-renderer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/:page" Component={PageRenderer}/>
        <Route path="/" render={() =><Redirect to= "/home" />}/>
        <Route Component={() => 404}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
  
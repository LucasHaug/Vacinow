import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Homepage from './screens/homepage';
import Upload from './screens/upload';
import Registration from './screens/registrationForm';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/upload' exact component={Upload} />
        <Route path='/registration' exact component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;

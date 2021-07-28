import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import './styles/global.css'

import Homepage from './screens/homepage';
import Upload from './screens/UploadScreen/uploadScreen';
import Registration from './screens/registrationForm/registrationForm';
import CheckPage from './screens/checkPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/upload' exact component={Upload} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/checkpage' exact component={CheckPage} />
      </Switch>
    </Router>
  );
}

export default App;

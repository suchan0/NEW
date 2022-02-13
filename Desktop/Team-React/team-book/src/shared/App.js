import "./App.css"
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configStore';

import { useDispatch } from "react-redux";
import Signup from "../pages/Signup";
import { Grid,Button } from "../elements";

function App() {
  
  return (
    <Grid>
      <ConnectedRouter history={history}>
        <Route path="/signup" exact component={Signup} />
      </ConnectedRouter>
      </Grid>
    
  );
  
}

export default App;

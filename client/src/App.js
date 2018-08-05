import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './store/actions/authAction';
import './App.css';
import { Navbar, Footer, Landing, Register, Login } from './components/Export';

//  Check for token
if (localStorage.jwtToken) {
  //  Set auth token header
  setAuthToken(localStorage.jwtToken);
  //  Decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //  Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //  Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    //  TODO: Clear current profile
    
    //  Redirect to login
    window.location.href = '/';
  }
}

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div style={{minHeight: "70.5vh"}}>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, {useEffect, useReducer} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import update from 'immutability-helper';
import CustomMap from "./components/map/CustomMap";
import localforage from "localforage";
import jwt_decode from "jwt-decode";
import setAuthToken from "./auth/setAuthToken";
import { setCurrentUser, logoutUser } from "./services/authService";
import store from "./store";
import {Header} from "./components/layout/Header";
import {LocateAndRecord} from "./components/navigation/LocateAndRecord";
import {BottomBar} from "./components/layout/BottomBar";
import {DrawPath} from "./components/navigation/DrawPath";
import {defaultObjectiveValue, defaultSubjectiveValue} from "./lib/constants";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import Landing from "./components/layout/Landing";
import {useSelector} from "react-redux";

export const AppContext = React.createContext();

function reducer(state, action) {
  return update(state, {
    recording: {$set: action.recording},
    gpsLocate: {$set: action.gpsLocate},
    objectiveSelection: {$set: action.objectiveSelection},
    subjectiveSelection: {$set: action.objectiveSelection},
    bottomExpanded: {$set: action.bottomExpanded}
  });
}

const initialState = {
  recording: false,
  gpsLocate: false,
  objectiveSelection: defaultObjectiveValue,
  subjectiveSelection: defaultSubjectiveValue,
  bottomExpanded: true
};

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
const AppComponent = (props) =>  {
  const {location} = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    localforage.config({
      name: 'atrapposIndexedDB',
      storeName: 'keyvaluepairs',
      driver: localforage.INDEXEDDB
    });


  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Header/>
        <main>
          <section>
            {!location.pathname.match(/home/) &&
            !location.pathname.match(/register/) &&
            !location.pathname.match(/login/) &&
            !location.pathname.match(/change\/password/) ?
            <CustomMap />:null}
            <Switch>
              <Route exact path="/home" component={withRouter(Landing)} />
              <Route exact path="/register" component={withRouter(Register)} />
              <Route exact path="/login" component={withRouter(Login)} />
              <PrivateRoute exact path="/change/password" component={ChangePassword} />
              <PrivateRoute  authed={auth.isAuthenticated} exact path='/location' component={LocateAndRecord} />}/>
              <PrivateRoute  authed={auth.isAuthenticated} exact path='/draw' component={DrawPath} />}/>
              <Route path="/" render={()=> <Redirect to="/home"/>}/>
            </Switch>
            <BottomBar/>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}


export const App = withRouter(AppComponent);


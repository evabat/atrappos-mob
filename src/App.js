import React, {useEffect, useReducer} from 'react';
import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import update from 'immutability-helper';
import logo from './logo.png';
import CustomMap from "./js/components/CustomMap";
import localforage from "localforage";

export const AppContext = React.createContext();

function reducer(state, action) {
  return update(state, {
    toast: {$set: action.toast},
  });
}

const initialState = {
  dummyVar: { dummyProp: false}
};



const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        <header>
          {/*<section>*/}
          {/*  <Link to="/" className="logo__link">*/}
          {/*    <img src={logo} alt="Atrappos Logo" className='logo__img'/>vacas*/}
          {/*  </Link>*/}
          {/*</section>*/}
        </header>
        <main>
          <section>
            <Switch>
              <Route exact path='/map' render={props => <CustomMap {...props} />}/>
              <Route path="/" render={()=> <Redirect to="/map"/>}/>
            </Switch>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;

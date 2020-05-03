import React, {useEffect, useReducer} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import update from 'immutability-helper';
import CustomMap from "./js/components/map/CustomMap";
import localforage from "localforage";
import {Header} from "./js/components/mainframe/Header";
import {LocateAndRecord} from "./js/components/navigation/LocateAndRecord";
import {BottomBar} from "./js/components/mainframe/BottomBar";
import {DrawPath} from "./js/components/navigation/DrawPath";

export const AppContext = React.createContext();

function reducer(state, action) {
  return update(state, {
    recording: {$set: action.recording},
    gpsLocate: {$set: action.gpsLocate}
  });
}

const initialState = {
  recording: false,
  gpsLocate: false
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
        <Header/>
        <main>
          <section>
            <CustomMap recording={state.recording} />
            <Switch>
              <Route exact path='/location' render={props => <LocateAndRecord {...props} />}/>
              <Route exact path='/draw' render={props => <DrawPath {...props} />}/>
              <Route path="/" render={()=> <Redirect to="/"/>}/>
            </Switch>
            <BottomBar/>
          </section>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import Navigator from "./navigation/MainNavBottom"
import {NavigationContainer} from "@react-navigation/native"

// import { applyMiddleware, createStore } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

// import { LogBox } from "react-native"
// LogBox.ignoreAllLogs(true)

// const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <NavigationContainer>
       {/* <Provider store={globalStore}> */}
        <Navigator/>
       {/* </Provider> */}
    </NavigationContainer>
  );
}

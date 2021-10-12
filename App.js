import React from 'react';
import Navigator from "./navigation/MainNavBottom"
import { NavigationContainer } from "@react-navigation/native"

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
// import { NativeBaseProvider, Box } from 'native-base';

import { LogBox } from "react-native"
import Product from './components/Product';
LogBox.ignoreAllLogs(true)

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Product/>
  );
}

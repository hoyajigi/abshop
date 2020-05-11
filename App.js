import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';

import store from './app/redux/store';
import Route from './app/routes';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

/*

<>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      </SafeAreaView>
    </>
    */
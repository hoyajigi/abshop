import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import { Provider } from 'react-redux';

import store from './app/redux/store';
import Route from './app/routes';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const linking = {
  prefixes: ['https://abshop.com', 'abshop://'],
  config: {
    Detail: 'product/:productId',
  },
};

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
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
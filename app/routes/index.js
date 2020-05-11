// app/routes/index.js
import React from 'react';
import HomePage from '../pages/HomePage';
import themes from '../styles/theme.style';
// const Route = createStackNavigator(
// {
//   Home: { screen: HomePage}
// },
// {
//  navigationOptions: {
//     headerStyle: {
//         backgroundColor: themes.BACKGROUND_COLOR,
//         paddingHorizontal: 10,
//     },
//     headerTintColor: '#fff'
//  }
// }
// );


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}

export default Route;
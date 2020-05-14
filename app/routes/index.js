// app/routes/index.js
import React from 'react';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

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
      <Stack.Screen name="Detail" component={DetailPage} options={{ title: '상품정보' }} />
    </Stack.Navigator>
  );
}

export default Route;
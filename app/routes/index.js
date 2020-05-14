// app/routes/index.js
import React from 'react';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
      <Stack.Screen name="Detail" component={DetailPage} options={{ title: '상품정보', headerBackTitleVisible:false }}   />
    </Stack.Navigator>
  );
}

export default Route;
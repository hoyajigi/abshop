// app/routes/index.js
import React from 'react';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import UserInfoPage from '../pages/UserInfoPage';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
      <Stack.Screen name="Detail" component={DetailPage} options={{ title: '상품정보', headerBackTitleVisible:false }}   />
      <Stack.Screen name="Login" component={LoginPage} options={{ title: '로그인', headerBackTitleVisible:false }}   />
      <Stack.Screen name="UserInfo" component={UserInfoPage} options={{ title: '사용자 정보 수정', headerBackTitleVisible:false }}   />
    </Stack.Navigator>
  );
}

export default Route;
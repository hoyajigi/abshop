import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  View
} from 'react-native';

const ReactAppboy = require('react-native-appboy-sdk');

export default HomePage = ({ navigation }) => {

  useEffect(() => {
  });
  const [value, onChangeText] = React.useState('');

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 18}}>External ID</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="랜덤한 External User ID를 입력해 볼까요?"
          />
          <Button
            title="회원가입 이벤트를 기록하고 ChangeUser"
            onPress={() => {
              ReactAppboy.logCustomEvent("Sign Up", {});
              ReactAppboy.changeUser(value);
              Alert.alert("로그인 되었어요");
            }}
            color="#f194ff"
          />
          <Button
            title="ChangeUser를 호출하고 회원가입 이벤트를 기록"
            onPress={() => {
              ReactAppboy.changeUser(value);
              ReactAppboy.logCustomEvent("Sign Up", {});              
              Alert.alert("로그인 되었어요");
            }}
            color="#f194ff"
          />

        </View>
      </SafeAreaView>
    );
}
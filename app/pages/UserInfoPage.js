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

export default UserInfoPage = ({ navigation }) => {

  useEffect(() => {
  });
  const [value, onChangeText] = React.useState('');

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 18}}>First Name</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="First Name"
          />
          <Button
            title="Save"
            onPress={() => {
              ReactAppboy.setFirstName(value);
              Alert.alert("저장 되었어요");
            }}
            color="#f194ff"
          />
        </View>
      </SafeAreaView>
    );
}
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { getProducts } from '../data';

export default DetailPage = ({ route, navigation }) => {
    return (
        <View style={{flex: 1}} >
                <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Image source={require("../assets/detail1.jpg")} />
                <Image source={require("../assets/detail1.jpg")} />
                <Image source={require("../assets/detail1.jpg")} />
                <Image source={require("../assets/detail1.jpg")} />

            </ScrollView>
            <TouchableOpacity
                style={styles.checkoutButton}
                underlayColor='#fff'>
                    <Text style={styles.checkoutText}>구매하기</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    checkoutButton:{
        backgroundColor:'#202020',
        height: 54,
        justifyContent: 'center',
      },
      checkoutText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10,
          fontWeight: 'bold',
          fontSize: 13
      }
})

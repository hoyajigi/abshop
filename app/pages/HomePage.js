import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  View
} from 'react-native';
import { getProducts } from '../data';
import Airbridge from 'airbridge-react-native-sdk';

const ReactAppboy = require('react-native-appboy-sdk');

export default HomePage = ({ navigation }) => {

  useEffect(() => {
     ReactAppboy.logCustomEvent("View Product List", {});
     Airbridge.state.setUser({
        ID: 'test1',
        email: 'test1@ab180.co',
    });

  });

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            justifyContent: "space-between"
          }}
        >
          <View />
          <View>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>AB#</Text>
          </View>
          <View style={{marginRight:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              style={{
                width: 20,
                height: 30,
              }}
              source={require('../assets/img_top_login.png')}
            />
            </TouchableOpacity>  
          </View>
        </View>
          <FlatList
            style={styles.cardList}
            columnWrapperStyle={styles.cardListColumnWrapper}
            removeClippedSubviews={false}
            numColumns={2}
            data={getProducts()}
            renderItem={({item}) => 
              <TouchableOpacity style={styles.cardView} key={item.id} onPress={() => navigation.navigate('Detail', {
                productId: item.id,
              })}>
                  <Image style={styles.cardImage} source={item.thumbnail} />
                  <Text style={styles.itemBrand}>{item.brandNmae}</Text>
                  <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.itemPrice}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </TouchableOpacity>}
          />
        </SafeAreaView>
    );
}

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
  cardList: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor:'white',
  },
  cardListColumnWrapper: {
    flex: 1,
    justifyContent: "space-around"
  },
  cardView: {
    margin: 10,
    width: width / 2 - 20
  },
  cardImage: {
    borderRadius: 10,
    width: width / 2 - 20,
    height: 207,
  },
  itemBrand: {
    marginTop: 9,
    fontSize: 10,
    fontWeight: "bold"
  },
  itemText: {
    marginTop: 6,
    fontSize: 11,
  },
  itemPrice: {
    marginTop: 6,
      fontSize: 15,
      fontWeight: "bold"
  }
})

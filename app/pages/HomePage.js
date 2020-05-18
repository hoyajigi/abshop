import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { getProducts } from '../data';

const ReactAppboy = require('react-native-appboy-sdk');
//     ReactAppboy.logCustomEvent(this.state.customEventText, {'stringKey': 'stringValue', 'intKey': 42, 'floatKey': 1.23, 'boolKey': true, 'dateKey': testDate});

export default HomePage = ({ navigation }) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
          <FlatList
            style={styles.cardList}
            columnWrapperStyle={styles.cardListColumnWrapper}

            numColumns={2}
            data={getProducts()}
            renderItem={({item}) => 
              <TouchableOpacity style={styles.cardView} key={item.id} onPress={() => navigation.navigate('Detail', {
                productId: item.id,
              })}>
                  <Image style={styles.cardImage} source={item.thumbnail} />
                  <Text style={styles.itemBrand}>{item.brandNmae}</Text>
                  <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
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
    height:207,
    flex: 1,
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

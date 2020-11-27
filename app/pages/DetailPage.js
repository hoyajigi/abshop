import React, { useEffect } from 'react';
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
  SafeAreaView,
  Alert
} from 'react-native';
import { getProducts } from '../data';
import Airbridge from 'airbridge-react-native-sdk';

const ReactAppboy = require('react-native-appboy-sdk');
//     ReactAppboy.logCustomEvent(this.state.customEventText, {'stringKey': 'stringValue', 'intKey': 42, 'floatKey': 1.23, 'boolKey': true, 'dateKey': testDate});

var width = Dimensions.get('window').width; //full width

export default DetailPage = ({ route, navigation }) => {
    const { productId } = route.params;
    const product = getProducts().find(item => item.id == productId)

    useEffect(() => {
        ReactAppboy.logCustomEvent("View Product Detail", {'productId': product.id});
    });

    return (
        <View style={{flex: 1}} >
            <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
                <ScrollView style={{backgroundColor:'white'}}>
                    <Image style={styles.detailImage} source={product.mainImage} />
                    
                    <View style={{padding: 12, backgroundColor:'white'}}>
                        <View style={{flexDirection:'row', alignItems: 'center', marginBottom: 12}}>
                            <Image style={{width:24, height:24, borderRadius:12}} source={product.brandImage} />
                            <Text style={{color:'#9e9e9e', marginLeft: 12}}>{product.brandNmae}</Text>
                        </View>
                        <Text style={{fontSize: 20}}>{product.title}</Text>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                    </View>
                    
                    <View style={styles.detailDivision}></View>
                    <View style={{backgroundColor:'white'}}>
                        <Image style={{width: width, maxWidth: width, height: 362}} source={product.detailImage} />
                        <Text style={{textAlign:'center', fontSize: 14, lineHeight: 24}}>{"\n"}{"\n"}{"\n"}{product.description}{"\n"}{"\n"}{"\n"}</Text>
    <Text style={{textAlign:'center',fontSize:14, fontWeight:'bold'}}>
    COLOR
    </Text>
    <Text style={{textAlign:'center',fontSize:14}}>
    /{"\n"}
    블랙, 블루{"\n"}
    {"\n"}
    {"\n"}
    SIZE{"\n"}
    /{"\n"}
    FREE{"\n"}
    [하단 실측사이즈 참고]{"\n"}
    {"\n"}
    {"\n"}
    FABRIC{"\n"}
    /{"\n"}
    면{"\n"}
    {"\n"}
    {"\n"}
    모든 의류들은 첫 세탁시에{"\n"}
    드라이클리닝을 권장합니다.{"\n"}
    {"\n"}
    재는 위치와 측정방법에 따라{"\n"}
    1~3cm 오차가 있을 수 있습니다.{"\n"}
    {"\n"}
    모델 피팅컷은 조명빛의 각도와{"\n"}
    화면의 해상도에 따라{"\n"}
    상품의 색상이 달라 보일 수 있습니다.{"\n"}
    *상품의 색상은 하단 디테일컷 참고부탁드립니다*{"\n"}
    {"\n"}
    {"\n"}
    MODEL SIZE{"\n"}
    /{"\n"}
    160cm 55size 25~26size{"\n"}
    {"\n"} 
                        </Text>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.checkoutButton}
                    underlayColor='#fff'
                    onPress={()=>{
                        ReactAppboy.logPurchase(product.id.toString(), product.price, 'USD', 1);

                        Airbridge.event.purchase({
                            products: [
                                {
                                    name: product.title,
                                    price: 12345,
                                    quantity: 1,
                                },
                            ],
                            currency: 'KRW',
                            total: 12345,
                            // transactionID: 'transactionID-purchase',
                            
                            // isInAppPurchase: true,
                        },
                        {
                            action: "매수"
                        }
                        );
                        Alert.alert("구매 완료", "구매해 주셔서 감사합니다!!!")
                        }}>
                        <Text style={styles.checkoutText}>구매하기</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    detailImage:{
        height:386
    },


    detailDivision: {
        height: 5,
        backgroundColor: '#ebebeb',
        marginBottom: 30
    },

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

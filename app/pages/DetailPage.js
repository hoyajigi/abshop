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
  SafeAreaView,
} from 'react-native';
import { getProducts } from '../data';

const ReactAppboy = require('react-native-appboy-sdk');
//     ReactAppboy.logCustomEvent(this.state.customEventText, {'stringKey': 'stringValue', 'intKey': 42, 'floatKey': 1.23, 'boolKey': true, 'dateKey': testDate});

var width = Dimensions.get('window').width; //full width

export default DetailPage = ({ route, navigation }) => {
    return (
        <View style={{flex: 1}} >
            <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
                <ScrollView style={{backgroundColor:'white'}}>
                    <Image style={styles.detailImage} source={require("../assets/detail1.jpg")} />
                    
                    <View style={{padding: 12, backgroundColor:'white'}}>
                        <View style={{flexDirection:'row', alignItems: 'center', marginBottom: 12}}>
                            <Image style={{width:24, height:24, borderRadius:12}} source={require("../assets/profile.jpg")} />
                            <Text style={{color:'#9e9e9e', marginLeft: 12}}>아이메리</Text>
                        </View>
                        <Text style={{fontSize: 20}}>[핏예쁨/레이어드] 브이넥 끈 나시 고방 체크 프릴 캉캉 밴딩 뷔스티에 롱 원피스 _아이메리</Text>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>17,730</Text>
                    </View>
                    
                    <View style={styles.detailDivision}></View>
                    {/* <View>
                        <Text>상품정보</Text>
                    </View> */}
                    <View style={{backgroundColor:'white'}}>
                        <Image style={{width: width, maxWidth: width}} source={require("../assets/gallery1.jpg")} />
                        <Text style={{textAlign:'center', fontSize: 14}}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
    여성스럽고 페미닌한{"\n"}
    사랑스러운 느낌의{"\n"}
    브이넥 끈 나시 고방 체크 프릴 캉캉 밴딩 뷔스티에 롱 원피스{"\n"}
    {"\n"} 
    {"\n"}
    {"\n"}
    잔잔한 고방 체크 뷔스티에 롱원피스로{"\n"}
    길이감도, 디자인도{"\n"}
    아주 예뻐요{"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    허리밴딩으로 허리를 잡아주어{"\n"}
    {"\n"}
    허리는 가늘어보이게{"\n"}
    {"\n"}
    다리는 길어보이게{"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    고방체크의 잔체크 패턴 디자인으로{"\n"}
    더욱더 사랑스럽고 여성스러운 느낌{"\n"}
    {"\n"}
    기본 블랙 색상으로 티셔츠, 니트, 가디건, 등등{"\n"}
    {"\n"}
    레이어드하시기에 좋습니다{"\n"}
    아이메리에서 강력추천드립니다{"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    {"\n"}
    </Text>
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
                    underlayColor='#fff'>
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

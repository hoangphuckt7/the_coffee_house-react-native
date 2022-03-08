import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import BottomSheet from './BottomSheet/BottomSheet'

const imageBackground = {
  uri: 'https://as1.ftcdn.net/v2/jpg/01/78/72/32/1000_F_178723243_eL6GKyCnduS2oc4dukStierACzF66ZPb.jpg',
}

function Home() {
  return (
    <GestureHandlerRootView
      style={{ width: '100%', position: 'absolute', backgroundColor: 'red' }}>
      <View style={styles.container}>
        <View>
          <View style={styles.boxAuth}>
            <ImageBackground
              source={imageBackground}
              style={{
                flex: 1,
              }}>
              <Text style={styles.title}>Đăng nhập</Text>
              <Text style={styles.content}>
                Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho
                bạn nhé
              </Text>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.btn_dn} onPress={() => alert('dn')}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}
              />
              <TouchableOpacity style={styles.btn2}>
                <Text onPress={() => alert('hello')} style={styles.btn2_kttv}>
                  The Coffee House's Reward
                </Text>
                <Icon name="right" color={'black'} size={24} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fce8b5',
  },
  boxAuth: {
    height: 300,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginVertical: 50,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  title: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  content: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  btn1: {
    alignSelf: 'center',
    width: 200,
    marginTop: 10,
    backgroundColor: '#e68a00',
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    alignItems: 'center',
  },
  btn2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btn_dn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  btn2_kttv: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
})

export default Home

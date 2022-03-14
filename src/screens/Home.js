import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import { css } from '../constants'
import BottomSheet from './BottomSheet/BottomSheet'

const imageBackground = {
  uri: 'https://as1.ftcdn.net/v2/jpg/01/78/72/32/1000_F_178723243_eL6GKyCnduS2oc4dukStierACzF66ZPb.jpg',
}

function Home() {
  return (
    <GestureHandlerRootView
      style={{ width: '100%', position: 'absolute', backgroundColor: 'red' }}>
      <View style={css.container}>
        <View>
          <View style={css.boxAuth}>
            <ImageBackground
              source={imageBackground}
              style={{
                flex: 1,
              }}>
              <Text style={css.title}>Đăng nhập</Text>
              <Text style={css.content}>
                Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho
                bạn nhé
              </Text>
              <TouchableOpacity style={css.btn1} onPress={() => alert('dn')}>
                <Text style={css.btn_dn}>Đăng nhập</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                }}
              />
              <TouchableOpacity style={css.btn2} onPress={() => alert('hello')}>
                <Text style={css.btn2_kttv}>The Coffee House's Reward</Text>
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

export default Home

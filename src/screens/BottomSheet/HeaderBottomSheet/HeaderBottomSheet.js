import React, { useState } from 'react'
import {
  Image,
  // ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { css, images } from '../../../constants'

const imgSlides = [
  'https://file.hstatic.net/1000075078/file/des_2880x880_b88701fa49854f768afca43a019e2970.jpeg',
  ,
  'https://file.hstatic.net/1000075078/file/home_banner_-_web_moi_desktop_7e17c9b7c9544165a8bd8962c66a3766.jpeg',
]

export default function HeaderBottomSheet() {
  //slide
  const [imgActive, setImgActive] = useState(0)
  onchange = nativeEven => {
    if (nativeEven) {
      const slide = Math.ceil(
        nativeEven.contentOffSet.x / nativeEven.layoutMeasurement.width,
      )
      if (imgActive != slide) {
        setImgActive(slide)
      }
    }
  }

  return (
    <View>
      <View style={css.line} />
      <View style={css.frames}>
        <TouchableOpacity
          style={css.frames_box}
          onPress={() => alert('giao hang')}>
          <Image source={images.giaohang} style={{ width: 80, height: 80 }} />
          <Text>Giao Hàng</Text>
        </TouchableOpacity>
        <View style={css.column} />
        <TouchableOpacity
          style={css.frames_box}
          onPress={() => alert('mang di')}>
          <Image source={images.mangdi} style={{ width: 80, height: 80 }} />
          <Text>Mang Đi</Text>
        </TouchableOpacity>
      </View>
      <View style={css.slide}>
        <Animated.ScrollView
          onScroll={({ nativeEven }) => onchange(nativeEven)}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1 }}
          pagingEnabled
          style={css.slide}>
          {imgSlides.map((imgSlide, index) => (
            <Image
              key={index}
              source={{ uri: imgSlide }}
              resizeMode="stretch"
              style={css.imageSlide}
            />
          ))}
        </Animated.ScrollView>
        <View style={css.wrapLine}>
          {imgSlides.map((imgSlide, index) => (
            <View
              key={imgSlide}
              style={
                imgActive == index
                  ? css.lineSlide
                  : [css.lineSlide, css.lineSlideNo]
              }
            />
          ))}
        </View>
      </View>
    </View>
  )
}

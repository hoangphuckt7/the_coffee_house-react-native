import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { UIButton } from '../../components'
import { images, css } from '../../constants'
import SpecialOffers from './SpecialOffers/SpecialOffers'
import Icon from 'react-native-vector-icons/EvilIcons'
import RemoteUpdates from './RemoteUpdates/RemoteUpdates'

const { height: SCREEN_HIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HIGHT + -SCREEN_HIGHT / 1.7
const MIN_TRANSATE_Y = -SCREEN_HIGHT - 20
// const MAX_TRANSLATE_Y = -SCREEN_HIGHT
// const MIN_TRANSATE_Y = -SCREEN_HIGHT / 2.2
const imgSlides = [
  'https://file.hstatic.net/1000075078/file/des_2880x880_b88701fa49854f768afca43a019e2970.jpeg',
  'https://file.hstatic.net/1000075078/file/home_banner_-_web_moi_desktop_7e17c9b7c9544165a8bd8962c66a3766.jpeg',
]

export default function BottomSheet() {
  const [menus, setMenus] = useState([
    {
      title: 'Ưu đãi đặc biệt',
      isSelected: true,
    },
    {
      title: 'Cập nhật từ xa',
      isSelected: false,
    },
    {
      title: '#CoffeeLove',
      isSelected: false,
    },
  ])

  const translationY = useSharedValue(0)

  const context = useSharedValue({ y: 0 })

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translationY.value }
    })
    .onUpdate(e => {
      translationY.value = e.translationY + context.value.y
      // translationY.value = Math.max(translationY.value, MAX_TRANSLATE_Y)
      translationY.value = Math.min(translationY.value, MIN_TRANSATE_Y)
    })

  useEffect(() => {
    translationY.value = withSpring(MIN_TRANSATE_Y, { damping: 50 })
  }, [])

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translationY.value,
      [MIN_TRANSATE_Y, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    )
    return {
      borderRadius,
      transform: [{ translateY: translationY.value }],
    }
  })

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
    <GestureDetector gesture={gesture}>
      <Animated.View style={[css.bottomSheetContainer, rBottomSheetStyle]}>
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
          <ScrollView
            onScroll={({ nativeEven }) => onchange(nativeEven)}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={css.slide}>
            {imgSlides.map((imgSlide, index) => (
              <Image
                key={index}
                source={{ uri: imgSlide }}
                resizeMode="stretch"
                style={css.imageSlide}
              />
            ))}
          </ScrollView>
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
        <View style={css.menu}>
          <View style={css.menu_title}>
            <Text style={[css.title, css.menu_text]}>Khám phá thêm</Text>
            <Image source={images.sparkles} style={{ width: 30, height: 30 }} />
          </View>
          <View style={css.menu_title_child}>
            {menus.map((menu, index) => (
              <UIButton
                onPress={() => {
                  let newMenus = menus.map(eachMenu => {
                    return {
                      ...eachMenu,
                      isSelected: eachMenu.title == menu.title,
                    }
                  })
                  setMenus(newMenus)
                }}
                key={index}
                title={menu.title}
                isSelected={menu.isSelected}
              />
            ))}
          </View>
          <View style={{ flex: 1, marginVertical: 25 }}>
            <SpecialOffers />
            {/* <RemoteUpdates /> */}
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  )
}

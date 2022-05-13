import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { UIButton } from '../../components'
import { css, images } from '../../constants'
import HeaderBottomSheet from './HeaderBottomSheet/HeaderBottomSheet'
import RemoteUpdates from './RemoteUpdates/RemoteUpdates'
import SpecialOffers from './SpecialOffers/SpecialOffers'

const { height: SCREEN_HIGHT } = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HIGHT + -SCREEN_HIGHT / 1.7
const MIN_TRANSATE_Y = -SCREEN_HIGHT - 20
// const MAX_TRANSLATE_Y = -SCREEN_HIGHT
// const MIN_TRANSATE_Y = -SCREEN_HIGHT / 2.2

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

  const [type, setType] = useState(0)

  const translationY = useSharedValue(0)

  const context = useSharedValue({ y: 0 })

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translationY.value }
    })
    .onUpdate(e => {
      translationY.value = e.translationY + context.value.y
      translationY.value = Math.max(translationY.value, MAX_TRANSLATE_Y * 1.76)
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

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[css.bottomSheetContainer, rBottomSheetStyle]}>
        <HeaderBottomSheet />
        <View style={css.menu}>
          <View style={css.menu_title}>
            <Text style={[css.title, css.menu_text]}>Khám phá thêm</Text>
            <Image source={images.sparkles} style={{ width: 30, height: 30 }} />
          </View>
          <View style={css.menu_title_child}>
            {menus.map((menu, index) => (
              <UIButton
                onPress={() => {
                  let newMenus = menus.map((eachMenu, index) => {
                    return {
                      ...eachMenu,
                      isSelected: eachMenu.title == menu.title,
                    }
                  })
                  setType(index)
                  setMenus(newMenus)
                }}
                key={index}
                title={menu.title}
                isSelected={menu.isSelected}
              />
            ))}
          </View>

          {type == 0 ? (
            <SpecialOffers />
          ) : type == 1 ? (
            <RemoteUpdates />
          ) : type == 2 ? (
            <SpecialOffers />
          ) : (
            <SpecialOffers />
          )}
        </View>
      </Animated.View>
    </GestureDetector>
  )
}

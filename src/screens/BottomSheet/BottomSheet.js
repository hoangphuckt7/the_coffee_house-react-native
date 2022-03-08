import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
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
import { images } from '../../constants'

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
  const translationY = useSharedValue(0)

  const context = useSharedValue({ y: 0 })

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translationY.value }
    })
    .onUpdate(e => {
      translationY.value = e.translationY + context.value.y
      translationY.value = Math.max(translationY.value, MAX_TRANSLATE_Y)
      translationY.value = Math.min(translationY.value, MIN_TRANSATE_Y)
    })

  useEffect(() => {
    translationY.value = withSpring(MIN_TRANSATE_Y, { damping: 50 })
  })

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
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={styles.frames}>
          <TouchableOpacity
            style={styles.frames_box}
            onPress={() => alert('giao hang')}>
            <Image source={images.giaohang} style={{ width: 80, height: 80 }} />
            <Text>Giao Hàng</Text>
          </TouchableOpacity>
          <View style={styles.column} />
          <TouchableOpacity
            style={styles.frames_box}
            onPress={() => alert('mang di')}>
            <Image source={images.mangdi} style={{ width: 80, height: 80 }} />
            <Text>Mang Đi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <ScrollView
            onScroll={({ nativeEven }) => onchange(nativeEven)}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.slide}>
            {imgSlides.map((imgSlide, index) => (
              <Image
                key={index}
                source={{ uri: imgSlide }}
                resizeMode="stretch"
                style={styles.imageSlide}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapLine}>
            {imgSlides.map((imgSlide, index) => (
              <View
                key={imgSlide}
                style={
                  imgActive == index ? styles.lineSlide : styles.lineSlideNo
                }
              />
            ))}
          </View>
        </View>
        <View>
          <Text>2123</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HIGHT,
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderRadius: 25,
    top: SCREEN_HIGHT,
    paddingHorizontal: 20,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  column: {
    height: '100%',
    width: 1,
    backgroundColor: '#cccccc',
  },
  frames: {
    height: 150,
    width: '100%',
    borderRadius: 15,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  frames_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    height: 150,
    width: '100%',
  },
  imageSlide: {
    height: '100%',
    width: Dimensions.get('window').width - 40,
    borderRadius: 15,
  },
  wrapLine: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  lineSlide: {
    width: 15,
    height: 4,
    backgroundColor: 'gray',
    marginHorizontal: 1,
    borderRadius: 2,
  },
  lineSlideNo: {
    width: 15,
    height: 4,
    backgroundColor: 'white',
    marginHorizontal: 1,
    borderRadius: 2,
  },
})

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function UIButton(props) {
  const { title, isSelected, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 10,
          borderRadius: 30,
          borderWidth: isSelected == true ? 1 : null,
          borderColor: 'orange',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: isSelected == true ? 'orange' : 'black',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
export default UIButton

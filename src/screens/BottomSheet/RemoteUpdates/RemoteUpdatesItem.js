import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Text, Image, View, TouchableOpacity } from 'react-native'
function SpecialOffersItem(props) {
  const { title, url, date } = props.updates
  const { onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '50%', padding: 5 }}>
      <Image
        style={{
          height: 150,
          width: '100%',
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        source={{
          uri: url,
        }}
      />
      <Text style={{ color: 'black', fontSize: 15, marginVertical: 5 }}>
        {title}
      </Text>
      <View style={{ flex: 1 }} />
      <View style={{ flexDirection: 'row' }}>
        <Icon name="calendar" size={24} color={'black'} />
        <Text style={{ color: 'black' }}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default SpecialOffersItem

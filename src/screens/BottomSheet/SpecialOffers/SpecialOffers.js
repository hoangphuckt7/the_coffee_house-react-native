import React from 'react'
import { FlatList, View } from 'react-native'
import { offers } from '../Data/Data'
import SpecialOffersItem from './SpecialOffersItem'

function SpecialOffers(props) {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <FlatList
        data={offers}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({ item, index }) => {
          return (
            <SpecialOffersItem
              offers={item}
              index={index}
              onPress={() => {
                alert(`${item.title}`)
              }}
            />
          )
        }}
      />
    </View>
  )
}
export default SpecialOffers

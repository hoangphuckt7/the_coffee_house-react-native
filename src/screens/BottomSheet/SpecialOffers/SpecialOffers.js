import React from 'react'
import { offers } from '../Data/Data'
import { FlatList } from 'react-native'
import SpecialOffersItem from './SpecialOffersItem'

function SpecialOffers(props) {
  return (
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
  )
}
export default SpecialOffers

import React from 'react'
import { updates } from '../Data/Data'
import { FlatList, View } from 'react-native'
import RemoteUpdatesItem from './RemoteUpdatesItem'

function RemoteUpdates(props) {
  return (
    <View style={{ backgroundColor: 'white', width: '100%' }}>
      <FlatList
        data={updates}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({ item, index }) => {
          return (
            <RemoteUpdatesItem
              updates={item}
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
export default RemoteUpdates

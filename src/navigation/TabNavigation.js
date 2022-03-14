import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text } from 'react-native'
import SpecialOffers from '../screens/BottomSheet/SpecialOffers/SpecialOffers'
import RemoteUpdates from '../screens/BottomSheet/RemoteUpdates/RemoteUpdates'
import { UIButton } from '../components'

const Tab = createMaterialTopTabNavigator()
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 0,
          paddingLefts: 5,
          justifyContent: 'flex-start',
          backgroundColor: 'transparent',
          height: 200,

          borderColor: 'transparent',
          // alignItems: 'center',
          // alignContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Ưu đãi đặc biệt"
        component={SpecialOffers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderWidth: focused == true ? 1 : null,
                borderColor: 'orange',
                backgroundColor: 'white',
                padding: 5,
                width: 255,
                height: 50,
                // alignSelf: 'center',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: focused == true ? 'orange' : 'black',
                }}>
                Ưu đãi đặc biệt
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cập nhật từ xa"
        component={RemoteUpdates}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                borderRadius: 30,
                borderWidth: focused == true ? 1 : null,
                borderColor: 'orange',
                padding: 5,
                width: 255,
                height: 100,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: focused == true ? 'orange' : 'black',
                }}>
                Ưu đãi đặc biệt
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigation

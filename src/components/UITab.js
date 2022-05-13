import * as React from 'react'
import { Home } from '../screens'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { colors } from '../constants'
import Icon from 'react-native-vector-icons/AntDesign'
/**
 *
 *
 *
 */
function UITab(props) {
  const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: 'orange' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              style={{
                color: focused ? 'white' : 'red',
              }}
              size={26}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              style={{
                color: focused ? 'white' : 'red',
              }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              style={{
                color: focused ? 'white' : 'red',
              }}
              size={26}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}
export default UITab

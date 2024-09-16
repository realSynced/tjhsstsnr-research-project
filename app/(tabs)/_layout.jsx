import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#94B64C',
          tabBarInactiveTintColor: '#C3DB91',
          tabBarStyle: {
            backgroundColor: '#FFFF',
            borderTopWidth: 1,
            borderTopColor: '#FFFF',            
            height: 60
          }
        }}
      >
        
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: 'Map',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.map}
                color={color}
                name="Map"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="leaderboard"
          options={{
            title: 'Leaderboard',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.leaderboard}
                color={color}
                name="Leaderboard"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.settings}
                color={color}
                name="Settings"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
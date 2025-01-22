import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const TabIcon = ({ iconName, color, label, focused }) => {
  return (
    <View className="items-center justify-center">
      <Ionicons name={iconName} size={24} color={color} />
      <Text className={`text-xs mt-1 ${focused ? 'font-semibold' : 'font-regular'}`} style={{ color }}>
        {label}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#15803d',
        tabBarInactiveTintColor: '#9ca3af',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              iconName="home-outline"
              color={color}
              label="Home"
              focused={focused}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              iconName="map-outline"
              color={color}
              label="Map"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              iconName="trophy-outline"
              color={color}
              label="Leaderboard"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              iconName="person-outline"
              color={color}
              label="Profile"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              iconName="settings-outline"
              color={color}
              label="Settings"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="">
          <Text className="">
            Settings
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings
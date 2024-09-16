import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-4">
          <Text className="">Map</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Map
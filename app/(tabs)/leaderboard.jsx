import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Leaderboard = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text>Leaderboard</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Leaderboard
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
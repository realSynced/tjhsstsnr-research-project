import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 flex-row flex-wrap p-4">
          <View className="flex w-1/2">
            <View className="w-full h-1/4 p-2">
              <View className="bg-background p-4 rounded-lg flex-1 justify-center">
                <Text className="text-2xl font-pmedium">Welcome [username]!</Text>
              </View>
            </View>
            <View className="w-full h-3/4 p-2">
              <View className="bg-background p-4 rounded-lg flex-1 justify-center">
                <Text className="text-2xl font-pmedium">Logs of trash thrown</Text>
              </View>
            </View>
          </View>

          <View className="flex w-1/2">
            <View className="w-full h-1/2 p-2">
              <View className="bg-background p-4 rounded-lg flex-1 justify-center">
                <Text className="text-2xl font-pmedium">Points</Text>
              </View>
            </View>
            
            <View className="w-full h-1/2 p-2">
              <View className="bg-background p-4 rounded-lg flex-1 justify-center">
                <Text className="text-2xl font-pmedium">Quick Actions</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
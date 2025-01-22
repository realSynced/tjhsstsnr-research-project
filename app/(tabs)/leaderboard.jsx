import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const Leaderboard = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Leaderboard
          </Text>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Top Recyclers
            </Text>
            <View className="space-y-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-yellow-100 p-2 rounded-full">
                    <Ionicons name="trophy" size={24} color="#CA8A04" />
                  </View>
                  <Text className="ml-3 text-gray-700 font-semibold">John Doe</Text>
                </View>
                <Text className="text-gray-600">850 points</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-gray-100 p-2 rounded-full">
                    <Ionicons name="trophy" size={24} color="#6B7280" />
                  </View>
                  <Text className="ml-3 text-gray-700 font-semibold">Jane Smith</Text>
                </View>
                <Text className="text-gray-600">720 points</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="bg-orange-100 p-2 rounded-full">
                    <Ionicons name="trophy" size={24} color="#9A3412" />
                  </View>
                  <Text className="ml-3 text-gray-700 font-semibold">Mike Johnson</Text>
                </View>
                <Text className="text-gray-600">650 points</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Your Ranking
            </Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="bg-green-100 p-2 rounded-full">
                  <Text className="font-semibold text-green-700">#8</Text>
                </View>
                <Text className="ml-3 text-gray-700 font-semibold">You</Text>
              </View>
              <Text className="text-gray-600">450 points</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Leaderboard
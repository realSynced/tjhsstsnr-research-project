import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6">
          <View className="flex-row items-center mb-6">
            <View className="bg-green-100 p-4 rounded-full mr-4">
              <Ionicons name="person" size={40} color="#15803d" />
            </View>
            <View>
              <Text className="text-2xl font-bold text-green-800">John Doe</Text>
              <Text className="text-gray-600">Eco Warrior</Text>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Your Stats
            </Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">450</Text>
                <Text className="text-sm text-gray-600">Total Points</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">32</Text>
                <Text className="text-sm text-gray-600">Items Recycled</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">8</Text>
                <Text className="text-sm text-gray-600">Ranking</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Achievements
            </Text>
            <View className="space-y-4">
              <View className="flex-row items-center">
                <View className="bg-yellow-100 p-2 rounded-full">
                  <Ionicons name="trophy" size={24} color="#CA8A04" />
                </View>
                <Text className="ml-3 text-gray-700">First Recycling Champion</Text>
              </View>
              <View className="flex-row items-center">
                <View className="bg-green-100 p-2 rounded-full">
                  <Ionicons name="leaf" size={24} color="#15803d" />
                </View>
                <Text className="ml-3 text-gray-700">Eco Pioneer</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Account Settings
            </Text>
            <View className="space-y-4">
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="person-outline" size={24} color="#15803d" />
                    <Text className="ml-3 text-gray-700">Edit Profile</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#15803d" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="notifications-outline" size={24} color="#15803d" />
                    <Text className="ml-3 text-gray-700">Notifications</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#15803d" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const Map = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Recycling Points
          </Text>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Nearby Locations
            </Text>
            <View className="space-y-4">
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="bg-green-100 p-2 rounded-full">
                      <Ionicons name="location" size={24} color="#15803d" />
                    </View>
                    <View className="ml-3">
                      <Text className="text-gray-700 font-semibold">Central Park Bin</Text>
                      <Text className="text-gray-500 text-sm">0.5 km away</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#15803d" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <View className="bg-green-100 p-2 rounded-full">
                      <Ionicons name="location" size={24} color="#15803d" />
                    </View>
                    <View className="ml-3">
                      <Text className="text-gray-700 font-semibold">Main Street Bin</Text>
                      <Text className="text-gray-500 text-sm">1.2 km away</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#15803d" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Quick Actions
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="navigate-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Navigate</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="filter-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="refresh-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Refresh</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Map
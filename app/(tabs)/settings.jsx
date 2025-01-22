import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [locationEnabled, setLocationEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Settings
          </Text>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              App Preferences
            </Text>
            <View className="space-y-4">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="notifications-outline" size={24} color="#15803d" />
                  <Text className="ml-3 text-gray-700">Push Notifications</Text>
                </View>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: "#d1d5db", true: "#86efac" }}
                  thumbColor={notificationsEnabled ? "#15803d" : "#f3f4f6"}
                />
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="location-outline" size={24} color="#15803d" />
                  <Text className="ml-3 text-gray-700">Location Services</Text>
                </View>
                <Switch
                  value={locationEnabled}
                  onValueChange={setLocationEnabled}
                  trackColor={{ false: "#d1d5db", true: "#86efac" }}
                  thumbColor={locationEnabled ? "#15803d" : "#f3f4f6"}
                />
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons name="moon-outline" size={24} color="#15803d" />
                  <Text className="ml-3 text-gray-700">Dark Mode</Text>
                </View>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: "#d1d5db", true: "#86efac" }}
                  thumbColor={darkMode ? "#15803d" : "#f3f4f6"}
                />
              </View>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Account
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
                    <Ionicons name="lock-closed-outline" size={24} color="#15803d" />
                    <Text className="ml-3 text-gray-700">Change Password</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={24} color="#15803d" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              About
            </Text>
            <View className="space-y-4">
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="information-circle-outline" size={24} color="#15803d" />
                    <Text className="ml-3 text-gray-700">App Version</Text>
                  </View>
                  <Text className="text-gray-600">1.0.0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="document-text-outline" size={24} color="#15803d" />
                    <Text className="ml-3 text-gray-700">Privacy Policy</Text>
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

export default Settings
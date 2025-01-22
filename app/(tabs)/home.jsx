import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6">
          <Text className="text-3xl font-bold text-green-800 mb-6">
            Welcome, [username]!
          </Text>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-2">
              Your Impact
            </Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">250</Text>
                <Text className="text-sm text-gray-600">Points</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-600">15</Text>
                <Text className="text-sm text-gray-600">Items Recycled</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6 mb-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Quick Actions
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="camera-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Scan Item</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="map-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Find Bin</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons name="trophy-outline" size={24} color="#15803d" />
                </View>
                <Text className="text-sm text-gray-600">Leaderboard</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white rounded-xl shadow-md p-6">
            <Text className="text-xl font-semibold text-green-700 mb-4">
              Recent Activity
            </Text>
            <View className="space-y-3">
              <View className="flex-row items-center">
                <Ionicons name="leaf-outline" size={20} color="#15803d" />
                <Text className="ml-2 text-gray-600">
                  Recycled plastic bottle
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="leaf-outline" size={20} color="#15803d" />
                <Text className="ml-2 text-gray-600">Composted food waste</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

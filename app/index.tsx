import { Text, TouchableOpacity, View, ScrollView, SafeAreaView } from "react-native";
import { router } from 'expo-router'
import React from "react";

/* 

Color Scheme: https://www.realtimecolors.com/?colors=152202-f7feec-a3f11e-7ef69e-53f3a1&fonts=Inter-Inter

*/

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl font-bold mb-8">Eco Cash</Text>
          <TouchableOpacity
            className="bg-blue-500 py-3 px-6 rounded-lg mb-4"
            onPress={() => router.push('/sign-in')}
          >
            <Text className="text-white font-semibold">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-green py-3 px-6 rounded-lg"
            onPress={() => router.push('/sign-up')}
          >
            <Text className="text-white font-semibold">Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
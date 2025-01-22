import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import React from "react";

/* 

Color Scheme: https://www.realtimecolors.com/?colors=152202-f7feec-a3f11e-7ef69e-53f3a1&fonts=Inter-Inter

*/

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-4xl font-bold mb-12 text-[#152202]">
            EcoCash
          </Text>
          <TouchableOpacity
            className="bg-[#a3f11e] py-4 px-8 rounded-xl w-full"
            onPress={() => router.push("/sign-up")}
          >
            <Text className="text-[#152202] font-semibold text-center text-lg">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

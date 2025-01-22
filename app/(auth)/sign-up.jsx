import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  AppState,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { supabase } from "../../lib/supabase";
import { postRequest } from "../processes/functions";
import { Button, Input } from "@rneui/themed";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      if (error.message.includes("no user exists")) {
        Alert.alert("No user exists with this email.");
      } else {
        Alert.alert(error.message);
      }
    } else {
      let sendData = await postRequest({
        token: `${session.access_token}`,
        refreshToken: `${session.refresh_token}`,
        time: Date.now(),
      });
      if (sendData) {
        console.log("Post request completed");
      } else {
        console.log("Post request not completed");
      }
      router.push("/home");
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      if (error.message.includes("already exists")) {
        Alert.alert("An account with that email already exists.");
      } else {
        Alert.alert(error.message);
      }
    } else if (session) {
      let sendData = await postRequest({
        token: `${session.access_token}`,
        refreshToken: `${session.refresh_token}`,
      });
      if (sendData) {
        console.log("Post request completed");
      } else {
        console.log("Post request not completed");
      }
      router.push("/home");
    }
    setLoading(false);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-black text-3xl font-bold mb-8">Sign In</Text>
          <Input
            className="w-full bg-gray-100 text-black rounded-lg py-3 px-4 mb-4"
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <View className="flex-row items-center">
            <Input
              className="flex-1 bg-gray-100 text-black rounded-lg py-3 px-4 mb-6 -translate-x-[0.6rem]"
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              className="bg-transparent ml-2 -mt-12"
              style={{ marginLeft: -60 }}
            >
              <Text className="text-black font-pmedium">
                {passwordVisible ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={signInWithEmail}
            buttonStyle="bg-blue-500 rounded-lg"
          />
          <View className="flex-col mt-8">
            <Text className="text-gray-600 mb-2">Don't have an account? </Text>
            <Button
              title="Sign up"
              disabled={loading}
              onPress={signUpWithEmail}
              buttonStyle="bg-blue-500 rounded-lg"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-black text-3xl font-bold mb-8">Sign Up</Text>
          <TextInput
            className="w-full bg-gray-100 text-black rounded-lg py-3 px-4 mb-4"
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            className="w-full bg-gray-100 text-black rounded-lg py-3 px-4 mb-4"
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            className="w-full bg-gray-100 text-black rounded-lg py-3 px-4 mb-6"
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            className="w-full bg-green rounded-lg py-3 px-4 mb-4"
            onPress={() => router.push('/home')}
          >
            <Text className="text-black text-center font-semibold">Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <Text className="text-gray-600">Already have an account? </Text>
            <Link href="/sign-in" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
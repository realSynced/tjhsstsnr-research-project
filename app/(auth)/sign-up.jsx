import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View, AppState, Text } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from '@rneui/themed'
import { router } from 'expo-router'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // const navigation = useNavigation()

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      console.log(error)
      if (error.message.includes('no user exists')) {
        Alert.alert('No user exists with this email.')
      } else {
        Alert.alert(error.message)
      }
    } else {
      router.push('/home')
    }
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      console.log(error)
      if (error.message.includes('already exists')) {
        Alert.alert('An account with that email already exists.')
      } else {
        Alert.alert(error.message)
      }
    }
    if (!error) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }
  // useEffect(() => {
  //   const { data: {user}, error } = supabase.auth.getUser();
  //   console.log(user.id)
  // })

  return (
    <View className="mt-10 p-3 bg-green-100 rounded-lg">
      <View className="mt-5">
        <Input
          className="border border-green-500 rounded-lg"
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View>
        <Input
          className="border border-green-500 rounded-lg"
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View className="mt-5">
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
          buttonStyle="bg-green-500 rounded-lg"
        />
      </View>
      <View>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
          buttonStyle="bg-green-500 rounded-lg"
        />
      </View>
      <View className="w-full">
        <Text className="text-lg text-center mt-5">After clicking "Sign Up", click "Sign In" to Sign In.</Text>
      </View>
    </View>
  )
}
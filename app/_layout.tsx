import { Slot, SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

/*
  Image CV
  https://www.youtube.com/watch?v=iOTWZI4RHA8
*/

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect( () => {
    if (error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync()
  }), [fontsLoaded]

  if(!fontsLoaded && !error) return null;
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)/sign-in" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
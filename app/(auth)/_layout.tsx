import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ headerShown: false }}
      ></Stack.Screen>
       <Stack.Screen
        name="otp"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;

import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-black font-extrabold text-4xl">Profile</Text>
      <StatusBar style="auto" />
      <Link href="/" className="text-blue-500">
        Go to Profile screen
      </Link>
    </View>
  );
}

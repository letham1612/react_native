import { Stack } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default TabLayout;

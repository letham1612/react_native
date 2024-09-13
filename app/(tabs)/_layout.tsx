import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";

const TabIcon: React.FC<{
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}> = ({ icon, color, name, focused }) => {
  return (
    <View className=" items-center justify-center gap-2 pt-4">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className=" w-6 h-6"
      />
      <Text className={`${focused ? "font-bold" : "font-normal"}`}>{name}</Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

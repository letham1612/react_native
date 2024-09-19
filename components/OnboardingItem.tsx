import { Image, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient"; 
import { Colors } from "@/constants/Colors";

interface OnboardingItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: any;
  };
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }} className="px-16">
      <View className="absolute top-[10%] left-0 right-0 justify-center items-center">
        <LinearGradient
          colors={[Colors.light.tint, Colors.dark.tint]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.7 }}
          style={{
            width: width - width * 0.3,
            height: width - width * 0.3,
            borderRadius: (width - width * 0.3) / 2,
          }}
        />
      </View>
      <Image
        className="h-2/3 w-full"
        source={item.image}
        resizeMode="contain"
      />
      <View className="h-1/3 flex justify-center items-center">
        <Text className="text-xl font-bold mb-4">{item.title}</Text>
        <Text className="max-w-xs text-base text-center">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

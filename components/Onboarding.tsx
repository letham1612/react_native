import {
  Animated,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { OnboardingContent } from "@/constants/data";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import { StatusBar } from "expo-status-bar";

import {  useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();
  const slideRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemChanged = useRef(
    ({
      viewableItems,
    }: {
      viewableItems: Array<{ item: any; index: number | null }>;
    }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="h-[80vh]">
        <FlatList
          data={OnboardingContent}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
          scrollEventThrottle={32}
        />
      </View>
      <View className="h-[5vh] justify-center">
        <Paginator data={OnboardingContent} scrollX={scrollX} />
      </View>
      <View className="h-[8vh] items-center justify-center flex">
        {currentIndex == OnboardingContent.length - 1 && (
          <TouchableOpacity
            className="bg-blue-500 justify-center items-center py-3 px-8 rounded-full"
            onPress={() => router.push('/profile' )}
          >
            <Text className="text-white text-center text-lg font-bold">
              Start
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

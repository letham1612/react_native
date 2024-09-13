import { Animated, FlatList, View } from "react-native";
import React, { useRef, useState } from "react";
import { OnboardingContent } from "@/constants/contents";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import { StatusBar } from "expo-status-bar";

export default function Onboarding() {
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
    <View className="flex justify-center">
      <StatusBar style="dark"/>
      <View className=" flex-3">
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
      <Paginator data={OnboardingContent} scrollX={scrollX} />
    </View>
  );
}

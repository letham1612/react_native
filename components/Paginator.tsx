import { View, Animated, useWindowDimensions } from "react-native";
import React from "react";

interface PaginatorProps {
  data: Array<any>;
  scrollX: Animated.Value;
}

const Paginator: React.FC<PaginatorProps> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-row justify-center items-center mt-2">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            className="h-2 w-2 rounded-full bg-gray-800 mx-2"
            style={{ transform: [{ scale }], opacity }}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

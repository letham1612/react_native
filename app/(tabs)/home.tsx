import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { icons, images } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Categories } from "@/constants/data";
import Swiper from "react-native-deck-swiper";

type CategoryType = {
  id: number;
  name: string;
  image: any;
};

const Home = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [cartItemCount, setCartItemCount] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Good Source Chocolates",
      price: "$08.00",
      image: images.cafe1,
    },
    {
      id: 2,
      name: "Best Coffee",
      price: "$05.00",
      image: images.cafe2,
    },
    {
      id: 3,
      name: "Fresh Fruits",
      price: "$10.00",
      image: images.cafe3,
    },
  ]);

  const handleCategorySelect = (category: CategoryType | null) => {
    setSelectedCategory(category ? category.id : null);
  };

  const cartProducts = [images.cards, images.cards, images.cards, images.cards];

  const onSwiped = (cardIndex: number) => {
    const swipedProduct = products[cardIndex];
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.push(swipedProduct);
      return updatedProducts;
    });
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 ">
        {/* Header */}
        <View className="h-[15%] flex-row px-5">
          <View className="w-[70%] justify-center">
            <Text className="text-4xl">
              {t("present")}
              <Text className="font-bold"> {t("drink")}</Text>
            </Text>
          </View>
          <View className=" w-[30%] justify-center items-center">
            <View className="border-2 py-5 px-1 rounded-full">
              <Image
                className="w-10 h-10"
                source={icons.eye}
                tintColor={Colors.dark.icon}
              />
            </View>
          </View>
        </View>

        {/* Categories */}
        <ScrollView
          className="h-[10%]"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row items-center space-x-4 px-5">
            {/* 'All' category */}
            <TouchableOpacity
              onPress={() => handleCategorySelect(null)}
              className={`flex-row items-center px-6 py-5 rounded-full ${
                selectedCategory === null ? "bg-black" : "bg-slate-200"
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedCategory === null ? "text-white" : "text-gray-600"
                }`}
              >
                All
              </Text>
            </TouchableOpacity>

            {/* Categories */}
            {Categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategorySelect(category)}
                className={`flex-row items-center px-6 py-5 rounded-full ${
                  selectedCategory === category.id ? "bg-black" : "bg-slate-200"
                }`}
              >
                <Image
                  source={category.image}
                  tintColor={
                    selectedCategory === category.id
                      ? "#facc15"
                      : Colors.dark.icon
                  }
                  className={`w-6 h-6 ${
                    selectedCategory === category.id ? "tint-white mr-2" : ""
                  }`}
                  resizeMode="contain"
                />
                {selectedCategory === category.id && (
                  <Text
                    className={`text-sm ${
                      selectedCategory === category.id
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {category.name}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Swiper Section */}
        <View className="h-[75%]">
          <View className=" h-[10%] px-5 justify-between flex-row ">
            <View className=" justify-center">
              <Text className=" text-xl">
                {selectedCategory === null ? (
                  "Our products"
                ) : (
                  <>
                    Collection{" "}
                    <Text className="font-bold">
                      {
                        Categories.find(
                          (category) => category.id === selectedCategory
                        )?.name
                      }
                    </Text>
                  </>
                )}
              </Text>
            </View>
            <View className=" justify-center items-end">
              <Image className=" w-8 h-8 " source={icons.rightArrow} />
            </View>
          </View>
          <View>
            <Swiper
              cards={products}
              renderCard={(product: any) => (
                <View className="bg-slate-200 rounded-3xl p-5 h-1/2  ">
                  <Text className="text-lg font-bold">{product.name}</Text>
                  <Text className="text-gray-500 mb-2">{product.name}</Text>

                  {/* Product Image */}
                  <Image
                    source={product.image}
                    className="w-full h-32 mb-3"
                    resizeMode="contain"
                  />

                  {/* Price and Cart Button */}
                  <View className="flex-row justify-between items-center mt-auto">
                    <Text className="text-lg font-bold">{product.price}</Text>
                    <TouchableOpacity className="bg-black p-3 rounded-full">
                      <Image
                        source={icons.play}
                        className="w-5 h-5"
                        tintColor="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              onSwiped={onSwiped}
              cardIndex={0}
              backgroundColor={"#f3f3f3"}
              stackSize={2}
              stackScale={0}
              stackSeparation={0}
              swipeAnimationDuration={0}
              cardVerticalMargin={15}
              cardHorizontalMargin={20}
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Footer Section */}
      <View className="h-[12%] bg-black flex-row justify-between items-center rounded-tl-[50px] rounded-tr-[50px] px-5 py-3">
        {/* Left side - Cart Information */}
        <View className="flex-row items-center w-2/5">
          <View className="w-[35px] h-[35px] rounded-full bg-yellow-400 justify-center items-center mr-5">
            <Text className="text-black text-lg font-bold">
              {cartItemCount}
            </Text>
          </View>
          <View>
            <Text className="text-white font-bold">Cart</Text>
            <Text className="text-gray-400 text-sm">
              {cartItemCount} Item{cartItemCount > 1 ? "s" : ""}
            </Text>
          </View>
        </View>

        {/* Right side - Horizontal product images */}
        <View className="w-3/5 justify-center flex-row">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              {cartProducts.map((product, index) => (
                <Image
                  key={index}
                  source={product}
                  className="w-10 h-10 rounded-full"
                  resizeMode="cover"
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

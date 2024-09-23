import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Profile = () => {
  const [quantity, setQuantity] = useState(3);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200 justify-center items-center px-5">
      {/* Header */}
      <View className="absolute top-12 left-5">
        <Text className="text-3xl text-black">Coconut</Text>
        <Text className="text-2xl font-bold -mt-2">Chips</Text>
        <Text className="text-base text-gray-500 mb-5">Dang</Text>
      </View>
      
      <View>
        {/* Product Image */}
        <Image
          source={require('../../assets/images/coconut.png')}
          className="w-72 h-72 mb-[-50] self-center"
        />

        {/* Product Info */}
        <View className="flex-row justify-between items-center w-2/5 mt-4 mb-5 self-center border-2 border-gray-100 rounded-xl p-3 h-[70] text-center bg-green-50">
          <Text className="text-sm text-gray-500 ml-1">Pure{'\n'}Coconut</Text>
          <Text className="text-lg font-bold text-black mr-[-2]">100%</Text>
        </View>

        {/* Quantity Section */}
        <View className="flex-row items-center mb-5 self-center">
          <TouchableOpacity onPress={decrementQuantity} className="bg-white rounded-full w-10 h-10 justify-center items-center mx-10">
            <Text className="text-2xl text-black">-</Text>
          </TouchableOpacity>
          <Text className="text-4xl font-bold">{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} className="bg-white rounded-full w-10 h-10 justify-center items-center mx-10">
            <Text className="text-2xl text-black">+</Text>
          </TouchableOpacity>
        </View>

        {/* Price */}
        <Text className="text-xl font-bold text-black mb-5 border-2 border-yellow-200 rounded-full p-2 text-center bg-yellow-200 w-30 self-center">
          $6.00
        </Text>

        {/* Add to Cart Button */}
        <TouchableOpacity className="bg-white rounded-full flex-row items-center justify-center w-[300] h-[80] self-center mt-5 mb-[-80]">
          <Text className="text-lg font-bold text-black mr-16 ml-5">Add To Cart</Text>
          <View className="bg-yellow-200 rounded-full w-[70] h-[60] justify-center items-center">
            <Text className="text-2xl">🛒</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

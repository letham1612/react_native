import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { icons } from "@/constants";

// Define a type for the props
type CardProps = {
  title: string;
  price: string;
  imageSource: any;
  category: string;
};

const Product: React.FC<CardProps> = ({ title, price, imageSource, category }) => {
  return (
    <View className="p-5 static mx-4 my-2 bg-slate-100 h-[230px] rounded-3xl shadow-lg">
      {/* Image */}
        <Image
            source={imageSource}
            className=" w-52 h-52 rounded-2xl absolute left-[-10px] bottom-0 right-0 top-6"
            style={{ transform: [{ rotate: '20deg' }] }}
        />


      <View className=' absolute top-0 left-4'>
            {/* Title */}
            <Text className="mt-4 text-xl font-bold  mb-1">{title}</Text>

             {/* Category */}
            <View className=' bg-white/30 items-center py-1 rounded-2xl'>
              <Text className="text-gray-500 text-xs ">{category}</Text>
            </View>
      </View>

        {/* Price and Cart Button */}
        <View className="flex-row justify-between absolute bottom-0 px-[5px] py-[5px] rounded-full left-0 right-0 mx-4 mb-3 bg-white/50 top- items-center mt-4">
            <Text className=" text-base pl-3 font-semibold">${price}</Text>

            {/* Cart Button */}
            <TouchableOpacity className="bg-gray-900 p-2 rounded-full">
                    <Image className=' w-6 h-6' tintColor={ "#fff"} source={icons.eye}/>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

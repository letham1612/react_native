import React, { useRef } from 'react';
import { View, FlatList, SafeAreaView, Text, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import Product from '../../components/Product'; // Import the Product component you created earlier
import { images, icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { router } from 'expo-router';



const data = [
  { title: 'Item 1', price: '7.00', imageSource: images.cafe1, category: 'Chips' },
  { title: 'Item 2', price: '8.00', imageSource: images.cafe2, category: 'Chips' },
  { title: 'Item 3', price: '6.00', imageSource: images.cafe3, category: 'Chips' },
  { title: 'Item 4', price: '6.00', imageSource: images.cafe4, category: 'Chips' },
  { title: 'Item 5', price: '6.00', imageSource: images.cafe5, category: 'Chips' },
  { title: 'Item 6', price: '7.00', imageSource: images.cafe1, category: 'Chips' },
  { title: 'Item 7', price: '8.00', imageSource: images.cafe2, category: 'Chips' },
  { title: 'Item 8', price: '10.00', imageSource: images.cafe3, category: 'Chips' },
  { title: 'Item 9', price: '11.00', imageSource: images.cafe4, category: 'Chips' },
  { title: 'Item 10', price: '12.00', imageSource: images.cafe5, category: 'Chips' },

  // Add more items...
];

const middleIndex = Math.ceil(data.length / 2);
const leftData = data.slice(0, middleIndex);
const rightData = data.slice(middleIndex);

const ListItem = () => {
  const leftListRef = useRef<FlatList>(null);
  const rightListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: any }) => (
    <Product title={item.title} price={item.price} imageSource={item.imageSource} category={item.category} />
  );

  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }} className='flex-1 bg-white'>
      <View className='flex-1 '>
        {/* Header */}
        <View className=' flex-1 flex-row'>
          <View className=' w-[70%] justify-center'>
            <Text className="text-4xl items-center ml-7 ">Collections </Text>
            <Text className="text-4xl font-bold ml-7">{data[0].category}</Text>
          </View>

          <View className='flex-1 justify-center items-center'>
            <View className="border-neutral-400 border-2 py-5 px-1 rounded-full">
              <TouchableOpacity
              onPress={() => router.push('/home')}>
                <Image
                  className="w-10 h-10"
                  source={icons.back}
                />
              </TouchableOpacity>
              </View>
          </View>
        </View>

        {/* Body */}
        <View className=' h-[85%] flex-row'>
          <View className='w-1/2'>
          <FlatList
          ref={leftListRef}
          data={leftData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 10 }}
          inverted
          onEndReached={() => {
            if (leftListRef.current) {
              leftListRef.current.scrollToEnd({ animated: true });
            }
          }}
          />
          </View>

          <View className='flex-1'>
            <View className='h-[10%] items-center justify-end flex-row'>
              <TouchableOpacity className="py-2 px-2 rounded-full ">
                <Image
                  className="w-10 h-10 mr-1"
                  source={icons.adjust}
                />
              </TouchableOpacity>
            </View>


            <View className='flex-1'>
              <FlatList
                  ref={rightListRef}
                  data={rightData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  className="flex-1"
                  contentContainerStyle={{ paddingTop: 10 }}
                  onEndReached={() => {
                    if (rightListRef.current) {
                      rightListRef.current.scrollToEnd({ animated: true });
                    }
                  }}
                />
            </View> 
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListItem;

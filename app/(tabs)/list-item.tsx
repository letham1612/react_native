import React, { useRef } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import Product from '../../components/Product'; // Import the Product component you created earlier
import { images } from "@/constants";

const data = [
  { title: 'Item 1', price: '7.00', imageSource: images.cafe1, category: 'Chips' },
  { title: 'Item 2', price: '8.00', imageSource: images.cafe2, category: 'Chips' },
  { title: 'Item 3', price: '6.00', imageSource: images.cafe3, category: 'Chips' },
  { title: 'Item 4', price: '6.00', imageSource: images.cafe4, category: 'Chips' },
  { title: 'Item 5', price: '6.00', imageSource: images.cafe5, category: 'Chips' },

  // Add more items...
];

const ListItem = () => {
  const leftListRef = useRef<FlatList>(null);
  const rightListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: { item: any }) => (
    <Product title={item.title} price={item.price} imageSource={item.imageSource} category={item.category} />
  );

  return (
    <SafeAreaView className='flex-1 bg-slate-300'>
      <View className='flex-1 bg-slate-100'>
        <View className=' flex-1 flex-row'>
          <View className=' bg-slate-200 w-[70%]'></View>
          <View className=' bg-amber-400  flex-1'></View>
        </View>
        <View className=' h-[85%] bg-neutral-600 flex-row'>
          <View className='w-1/2 bg-indigo-200'>
          <FlatList
          ref={leftListRef}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 10 }}
          inverted
          onEndReached={() => {
            if (leftListRef.current) {
              leftListRef.current.scrollToOffset({ animated: true, offset: 0 });
            }
          }}
        />
          </View>
          <View className='flex-1 bg-indigo-500'>
            <View className='bg-red-700 h-[10%]'></View>
            <View className='flex-1 bg-yellow-950'>
              <FlatList
                  ref={rightListRef}
                  data={data}
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

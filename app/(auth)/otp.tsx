import { router } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const Otp = () => {
  const [values, setValues] = useState(Array(5).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);

    if (text.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    { nativeEvent }: { nativeEvent: { key: string } },
    index: number
  ) => {
    if (nativeEvent.key === "Backspace") {
      if (values[index].length === 0 && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SafeAreaView
      className="bg-white flex-1"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
      
      <View className="flex-1">
        <View className="h-[5%] mt-10">
          <Text className="text-2xl font-bold text-center">Xác nhận Mã OTP</Text>
        </View>

        <View className="h-[6%] mb-2 ml-5 mr-5">
          <Text className="text-center text-base text-black">
            Mã xác thực gồm 5 số đã được gửi đến Zalo hoặc số điện thoại
              <Text className="text-blue-500"> 09999999</Text>
          </Text>
        </View>

        <View className="h-[20%] mt-3">
          <Text className="text-center text-base text-black mb-2">
            Nhập mã để tiếp tục
          </Text>

          <View className="h-[20%]flex flex-row justify-center text-center px-2 ">
            {[...Array(5)].map((_, index) => (
              <View key={index} className={`w-14 h-16 ${index < 4 ? "mr-4" : ""}`}>
                <TextInput
                  ref={(ref) => (inputs.current[index] = ref)}
                  className="w-full h-full text-center text-3xl leading-none items-center justify-center rounded-xl border border-gray-400 bg-white focus:bg-gray-100"
                  keyboardType="numeric"
                  maxLength={1}
                  value={values[index]}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(event) => handleKeyPress(event, index)}
                />
              </View>
            ))}
          </View>

          <View className="h-[10%] mt-2">
            <Text className="text-center text-sm text-zinc-800">
              Bạn không nhận được mã? <Text className="text-slate-500">Gửi lại</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

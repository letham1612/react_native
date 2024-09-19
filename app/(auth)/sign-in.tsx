import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Platform,
  StatusBar,
} from "react-native";

const SignIn = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        className="flex-1 bg-white justify-start"
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View className="p-5 flex-1 items-center h-fulw-full">
          <View className="w-full items-center flex-1">
            <View className="flex-1 justify-center items-center">
              <Text className="text-xl text-black mb-2">
                Chào mừng bạn đến với
              </Text>
              <Text className="text-3xl font-bold text-black mb-5">
                PHUC LONG
              </Text>
            </View>
            <View className="w-full flex-1">
              <View className=" flex-row items-center border py-4 mb-2 px-2 rounded-md border-gray-300 ">
                <View className=" border-r border-gray-300 mr-2">
                  <Text style={{ fontSize: 16 }}>🇻🇳 +84 </Text>
                </View>
                <TextInput
                  style={{
                    fontSize: 16,
                    flex: 1,
                    paddingVertical: 0,
                  }}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              </View>
              <TouchableOpacity
                onPress={() => router.push("/otp")}
                className="bg-gray-300 py-4 rounded-md items-center w-full mb-5"
              >
                <Text className="text-base text-black">Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-full items-center">
            <Text className="text-sm my-3 text-gray-500">HOẶC</Text>
            <TouchableOpacity className="w-full bg-blue-400 py-4 rounded-md mb-3 items-center">
              <Text className="text-base text-white">
                Tiếp tục bằng Twitter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-md mb-3 items-center">
              <Text className="text-base text-white">
                Tiếp tục bằng Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full bg-red-500 py-4 rounded-md mb-3 items-center">
              <Text className="text-base text-white">Tiếp tục bằng Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-5">
              <Text className="text-sm text-gray-500">Tiếng Việt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

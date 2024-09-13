import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import Onboarding from "@/components/Onboarding";

export default function App() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        alert("Mất kết nối mạng. Vui lòng kiểm tra lại.");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView>
      <Onboarding />
    </SafeAreaView>
  );
}

import "@/global.css";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="h-full">
      <Slot />
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
}

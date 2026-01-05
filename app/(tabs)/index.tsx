import { createHomeStyles } from "@/assets/styles/home.style";
import useTheme from "@/hooks/useTheme";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const HomeStyles = createHomeStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={HomeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={HomeStyles.safeArea}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text className="">Switch mode</Text>
        </TouchableOpacity>
        <Header />
      </SafeAreaView>
    </LinearGradient>
  );
}


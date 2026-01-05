import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is first mobile app.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text className="">Switch mode</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  Link: {
    color: "black",
    backgroundColor: "red",
    marginTop: 12
  }
})

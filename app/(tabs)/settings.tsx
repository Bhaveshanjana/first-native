import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.style";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ProgressState from "@/components/ProgressState";
import Preferences from "@/components/Preferences";
import Caution from "@/components/Caution";

export default function settingsScreen() {
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyle.container}
    >
      <SafeAreaView style={settingsStyle.safeArea}>
        <View style={settingsStyle.header}>
          <View style={settingsStyle.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyle.iconContainer}
            >
              | <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyle.title}>Settings</Text>
          </View>
        </View>
        <ScrollView
          style={settingsStyle.scrollView}
          contentContainerStyle={settingsStyle.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressState />
          <Preferences />
          <Caution />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

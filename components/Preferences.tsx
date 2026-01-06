import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { createSettingsStyles } from '@/assets/styles/settings.style';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Preferences = () => {
    const [isautoSync, setIAutoSync] = useState(true);
    const [isNotificationsEnabled, setIsNotificationEnabled] = useState(true);

    const { colors, isDarkMode, toggleDarkMode } = useTheme()
    const settingsStyle = createSettingsStyles(colors)
    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
            <Text style={settingsStyle.sectionTitle}>Preferences</Text>
            {/* Dark mode */}
            <View style={settingsStyle.settingItem}>
                <View style={settingsStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.primary} style=
                        {settingsStyle.settingIcon}>
                        <Ionicons name="moon" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Dark Mode</Text>
                </View >
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} thumbColor=
                    {"#fff"}
                    trackColor={{ false: colors.border, true: colors.primary }} />
            </ View>
            {/* Notification */}
            <View style={settingsStyle.settingItem}>
                <View style={settingsStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.warning} style=
                        {settingsStyle.settingIcon}>
                        <Ionicons name="notifications" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Notification</Text>
                </View >
                <Switch value={isNotificationsEnabled} onValueChange={(() => setIsNotificationEnabled(!isNotificationsEnabled))} thumbColor=
                    {"#fff"}
                    trackColor={{ false: colors.border, true: colors.warning }} />
            </ View>
            {/* Auto-sync */}
            <View style={settingsStyle.settingItem}>
                <View style={settingsStyle.settingLeft}>
                    <LinearGradient colors={colors.gradients.success} style=
                        {settingsStyle.settingIcon}>
                        <Ionicons name="notifications" size={18} color="#fff" />
                    </LinearGradient>
                    <Text style={settingsStyle.settingText}>Auto Sync</Text>
                </View >
                <Switch value={isautoSync} onValueChange={(() => setIAutoSync(!isautoSync))} thumbColor=
                    {"#fff"}
                    trackColor={{ false: colors.border, true: colors.success }} />
            </ View>
        </LinearGradient>
    )
}

export default Preferences
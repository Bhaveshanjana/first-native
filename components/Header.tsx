import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.style'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    const { colors } = useTheme()
    const homeStyle = createHomeStyles(colors)
    const todos = useQuery(api.todos.getTodos)

    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const totalCount = todos ? todos.length : 0
    const progressPercentage = totalCount > 0 ? (completedTodos / totalCount) * 100 : 0;
    return (
        <View style={homeStyle.header}>
            <View style={homeStyle.titleContainer}>
                <LinearGradient colors={colors.gradients.primary} style={homeStyle.iconContainer}>
                    <Ionicons name='flash-outline' size={28} color={"fff"} />
                </LinearGradient>
                <View style={homeStyle.titleTextContainer}>
                    <Text style={homeStyle.title}>Today&apos;s Task</Text>
                    <Text style={homeStyle.subtitle}>{completedTodos} of {totalCount} completed</Text>
                </View>
            </View>
            {
                totalCount > 0 && (
                    <View style={homeStyle.progressContainer}>
                        <View style={homeStyle.progressBarContainer}>
                            <View style={homeStyle.progressBar}>
                                <LinearGradient
                                    colors={colors.gradients.success}
                                    style={[homeStyle.progressFill, { width: `${progressPercentage}%` }]}
                                />
                            </View>
                            I
                            <Text style={homeStyle.progressText}>{Math.round(progressPercentage)}%</Text>
                        </View>
                    </View >
                )
            }
        </View >
    )
}

export default Header
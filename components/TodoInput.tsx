import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.style'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const TodoInput = () => {
    const { colors } = useTheme()
    const homeStyle = createHomeStyles(colors);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            try {
                await addTodo({ text: newTodo.trim() })
                setNewTodo("")
            } catch (error) {
                Alert.alert("Error", "Faild to add todo")
            }
        }
    };
    return (
        <View style={homeStyle.inputSection}>
            <View style={homeStyle.inputWrapper}>
                <TextInput
                    style={homeStyle.input}
                    placeholder="Enter todo"
                    value={newTodo}
                    onChangeText={setNewTodo}
                    onSubmitEditing={handleAddTodo}
                    placeholderTextColor={colors.textMuted}
                />
                <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                    <LinearGradient colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                        style={[homeStyle.addButton, !newTodo.trim() && homeStyle.addButtonDisabled]}
                    >
                        <Ionicons name='add' size={24} color={"ffffff"} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoInput
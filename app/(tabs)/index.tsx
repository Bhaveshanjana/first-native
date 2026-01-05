import { createHomeStyles } from "@/assets/styles/home.style";
import useTheme from "@/hooks/useTheme";
import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Ionicons } from "@expo/vector-icons";
import EmptyState from "@/components/EmptyState";

type Todo = Doc<"todos">

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const HomeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos)
  const toggleTodo = useMutation(api.todos.toggleTodo)
  const isLoading = todos === undefined
  if (isLoading) return <LoadingSpinner />

  const handleToggleItem = async (id: Id<"todos">) => {
    try {

      const ToggleItem = await toggleTodo({ id })
    } catch (error) {
      Alert.alert("Error", "Faild to update todo")
    }
  }
  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={HomeStyles.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface} style={HomeStyles.todoItem} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <TouchableOpacity style={HomeStyles.checkbox} activeOpacity={0.7} onPress={() => handleToggleItem(item._id)}>
            <LinearGradient colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted} style={[HomeStyles.checkboxInner, { borderColor: item.isCompleted ? "transparent" : colors.border },]}>
              {
                item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />
              }
            </LinearGradient>
          </TouchableOpacity>
          <View style={HomeStyles.todoTextContainer}>
            <Text style={[HomeStyles.todoText, item.isCompleted && {
              textDecorationLine: "line-through", color: colors.textMuted, opacity: 0.6
            },
            ]}>
              {item.text}
            </Text>
            <View style={HomeStyles.todoActions}>
              <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.warning} style=
                  {HomeStyles.actionButton}>
                  <Ionicons name="pencil" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.danger} style=
                  {HomeStyles.actionButton}>
                  <Ionicons name="trash" size={14} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }
  return (
    <LinearGradient colors={colors.gradients.background} style={HomeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={HomeStyles.safeArea}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text className="">Switch mode</Text>
        </TouchableOpacity>
        <Header />
        <TodoInput />
        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          style={HomeStyles.todoList}
          contentContainerStyle={HomeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}


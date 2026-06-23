import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import UserOnly from "../../components/auth/UserOnly";
import { useTheme } from "../../src/theme/useTheme";


export default function DashboardLayout() {
    const theme = useTheme();

    return (
        <UserOnly>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.navBackground,
                        padding: 10,
                        height: 90
                    },
                    tabBarActiveTintColor: theme.iconColorFocused,
                    tabBarInactiveTintColor: theme.iconColor,
                }}
            >
                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={25}
                                name={focused ? "person" : "person-outline"}
                                color={focused ? theme.iconColorFocused : theme.iconColor}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="Books"
                    options={{
                        title: "Books",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={25}
                                name={focused ? "book" : "book-outline"}
                                color={focused ? theme.iconColorFocused : theme.iconColor}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="Create"
                    options={{
                        title: "Create",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={25}
                                name={focused ? "create" : "create-outline"}
                                color={focused ? theme.iconColorFocused : theme.iconColor}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="books/[id]"
                    options={{ href: null }}
                />
            </Tabs>
        </UserOnly>
    );
}
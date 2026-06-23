import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { BooksProvider } from "../src/contexts/BooksContext";
import { UserProvider } from "../src/contexts/UserContext";
import { useTheme } from "../src/theme/useTheme";

const RootLayout = () => {
  const theme = useTheme();

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}>
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

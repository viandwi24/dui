import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VariableContextProvider } from "nativewind";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { Stack } from "expo-router";
import "./global.css";

const lightTheme = {
  "--color-background": "#ffffff",
  "--color-foreground": "#000000",
  "--color-primary": "#3b82f6",
  "--color-secondary": "#8b5cf6",
  "--color-muted": "#9ca3af",
} as Record<`--${string}`, string>;

const darkTheme = {
  "--color-background": "#0a0a0a",
  "--color-foreground": "#e5e5e5",
  "--color-primary": "#60a5fa",
  "--color-secondary": "#a78bfa",
  "--color-muted": "#9ca3af",
} as Record<`--${string}`, string>;

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <VariableContextProvider value={theme}>
        <Stack>
          <Stack.Screen name="tabs" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", headerShown: false }}
          />
        </Stack>
        <StatusBar style="auto" />
      </VariableContextProvider>
    </ThemeProvider>
  );
}

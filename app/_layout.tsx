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
  "--color-foreground": "#0f1f25",
  "--color-primary": "#3b82f6",
  "--color-secondary": "#8b5cf6",
  "--color-muted": "#9ca3af",
  "--color-success": "#22c55e",
  "--color-error": "#ef4444",
} as Record<`--${string}`, string>;

const darkTheme = {
  "--color-background": "#030712",
  "--color-foreground": "#e5e5e5",
  "--color-primary": "#60a5fa",
  "--color-secondary": "#a78bfa",
  "--color-muted": "#9ca3af",
  "--color-success": "#4ade80",
  "--color-error": "#f87171",
} as Record<`--${string}`, string>;

export const unstable_settings = {
  anchor: "(tabs)",
};

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme["--color-background"],
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: darkTheme["--color-background"],
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme}
    >
      <VariableContextProvider value={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="tabs" />
          <Stack.Screen name="index" />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
        <StatusBar style="auto" />
      </VariableContextProvider>
    </ThemeProvider>
  );
}

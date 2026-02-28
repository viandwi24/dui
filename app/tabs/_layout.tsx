import { Tabs } from "expo-router";
import React from "react";

import { ExpoRouterTabBar, Icon } from "@/components/ui";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      tabBar={(props) => <ExpoRouterTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "ph:house-fill" : "ph:house-duotone"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: "Components",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "ph:package-fill" : "ph:package-duotone"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feeds"
        options={{
          title: "Feeds",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={
                focused
                  ? "ph:chat-centered-dots-fill"
                  : "ph:chat-centered-dots-duotone"
              }
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

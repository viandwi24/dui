import { cn } from "@/lib/utils";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "./text";
import { ScrollView } from "./view";

export function SafeAreaView({
  children,
  className,
  bottom = true,
}: {
  children: React.ReactNode;
  className?: string;
  bottom?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: bottom ? insets.bottom : 0,
      }}
      className={className}
    >
      {children}
    </View>
  );
}

// className: "style",
// classNameIndicator: "indicatorStyle",
// classNameContentContainer: "contentContainerStyle",
export function SafeAreaScrollView({
  children,
  className,
  classNameIndicator,
  classNameContentContainer,
  bottom = true,
}: {
  children: React.ReactNode;
  className?: string;
  classNameIndicator?: string;
  classNameContentContainer?: string;
  bottom?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        paddingTop: insets.top,
        paddingBottom: bottom ? insets.bottom : 0,
      }}
      className={className}
      indicatorClassName={classNameIndicator}
      contentContainerClassName={classNameContentContainer}
    >
      {children}
    </ScrollView>
  );
}

export function SafeAreaScreen({
  children,
  className,
  classNameIndicator,
  classNameContentContainer,
  bottom = true,
  title,
  headerActions,
}: {
  children: React.ReactNode;
  className?: string;
  classNameIndicator?: string;
  classNameContentContainer?: string;
  bottom?: boolean;
  title?: string;
  headerActions?: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: bottom ? insets.bottom : 0,
      }}
      className={cn("flex-1 flex flex-col", className)}
    >
      <View className="bg-background border-b-2 border-background-500/50 px-4 h-12.75 pt-3 flex flex-row items-center justify-between">
        <Text className="text-2xl font-bold">{title}</Text>
        {headerActions}
      </View>
      <ScrollView
        className={cn("flex-1", className)}
        indicatorClassName={classNameIndicator}
        contentContainerClassName={classNameContentContainer}
      >
        {children}
      </ScrollView>
    </View>
  );
}

export { useSafeAreaInsets } from "react-native-safe-area-context";
export * from "./button";
export * from "./card";
export * from "./icon";
export * from "./router";
export * from "./switch";
export * from "./text";
export * from "./view";


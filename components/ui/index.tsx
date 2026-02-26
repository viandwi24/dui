import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

export { useSafeAreaInsets } from "react-native-safe-area-context";
export * from "./button";
export * from "./icon";
export * from "./router";
export * from "./switch";
export * from "./text";
export * from "./view";


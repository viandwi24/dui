import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "./text";
import { View } from "./view";

// DEFAULT
const buttonVariants = cva(
  "border-none transition-all duration-100 rounded-xl shadow-[0_6px_0_0] shadow-primary-500 flex active:shadow-[0_0px_0_0] active:translate-y-2",
  {
    variants: {
      color: {
        default:
          "bg-neutral-950 border-neutral-800 shadow-neutral-800 dark:bg-neutral-50 dark:border-neutral-300 dark:shadow-neutral-300",
        primary: "bg-primary-400 border-primary-500 shadow-primary-500",
        secondary: "bg-muted-500 border-muted-600 shadow-muted-600",
        danger: "bg-red-400 border-red-500 shadow-red-500",
        success: "bg-green-400 border-green-500 shadow-green-500",
      },
      size: {
        sm: "px-2.5 py-1.5",
        md: "px-4 py-4",
      },
      alignment: {
        center: "items-center",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
      alignment: "center",
    },
  },
);
const buttonSubTextVariants = cva("font-bold uppercase", {
  variants: {
    color: {
      default: "text-neutral-50 dark:text-neutral-950",
      danger: "text-neutral-50 dark:text-neutral-50",
      primary: "text-neutral-50 dark:text-neutral-50",
      secondary: "text-neutral-50 dark:text-neutral-50",
      success: "text-neutral-50 dark:text-neutral-50",
    },
    size: {
      sm: "",
      md: "",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});
export interface ButtonProps
  extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {
  text?: string;
  icon?: React.ReactNode;
}
const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, className, size, color, icon, onPressIn, ...props }, ref) => {
  const showText = () => {
    if (!props.text) return null;
    return (
      <Text
        className={cn(
          buttonSubTextVariants({ color, size }),
          "text-center",
          className,
        )}
      >
        {props.text}
      </Text>
    );
  };
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ color, size }), className)}
      ref={ref}
      activeOpacity={70}
      onPressIn={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPressIn?.(e);
      }}
      {...props}
    >
      <View className="flex flex-row gap-2 text-center justify-center items-center">
        {icon}
        {children ?? showText()}
      </View>
    </TouchableOpacity>
  );
});
Button.displayName = "Button";

// OUTLINE ICON (just static border button with icon and text)
const outlineButtonVariants = cva("bg-transparent rounded-xl border-2", {
  variants: {
    color: {
      default:
        // "border-neutral-100 text-neutral-950 bg-neutral-50 dark:border-neutral-50/50 dark:text-neutral-50 dark:bg-neutral-950",
        "border-foreground bg-transparent",
      transparent: "border-transparent text-gray-500",
      danger: "border-red-400 text-red-400 bg-red-400/20",
      success: "border-green-400 text-green-400 bg-green-400/20",
      primary: "border-primary text-primary bg-primary/20",
      secondary: "border-secondary-500 text-secondary-500 bg-secondary-500/20",
    },
    size: {
      sm: "px-2.5 py-1.5",
      md: "px-3 py-3",
    },
    alignment: {
      center: "items-center",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    alignment: "center",
  },
});
export interface OutlineButtonProps
  extends TouchableOpacityProps, VariantProps<typeof outlineButtonVariants> {
  text?: string;
  icon?: React.ReactNode;
}
const OutlineIconButton = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  OutlineButtonProps
>(({ children, className, size, icon, color, onPressIn, ...props }, ref) => {
  const showText = () => {
    if (!props.text) return null;
    return <Text className="text-foreground">{props.text}</Text>;
  };
  return (
    <TouchableOpacity
      className={cn(outlineButtonVariants({ color, size, className }))}
      ref={ref}
      activeOpacity={10}
      onPressIn={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPressIn?.(e);
      }}
      {...props}
    >
      <View className="flex flex-row gap-2 items-center">
        {icon}
        {children ?? showText()}
      </View>
    </TouchableOpacity>
  );
});
OutlineIconButton.displayName = "OutlineIconButton";

// exports
export { Button, buttonVariants, outlineButtonVariants, OutlineIconButton };

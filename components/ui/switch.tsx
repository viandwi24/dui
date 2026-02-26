import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { View } from "./view";

const switchVariants = cva(
  "rounded-full transition-all duration-300 relative mx-0.5 my-0.5",
  {
    variants: {
      size: {
        sm: "w-12 h-6",
        md: "w-14 h-7",
        lg: "w-16 h-8",
      },
      color: {
        default: "bg-gray-300 dark:bg-gray-600",
        primary: "bg-blue-400 dark:bg-blue-500",
        success: "bg-green-400 dark:bg-green-500",
        danger: "bg-red-400 dark:bg-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
    },
  },
);

const switchThumbVariants = cva(
  "absolute bg-white dark:bg-neutral-950 shadow-md transition-all duration-300 scale-[1.6]",
  {
    variants: {
      size: {
        sm: "w-4 h-4 top-[3px] rounded-sm",
        md: "w-5 h-5 top-[4px] rounded-md",
        lg: "w-6 h-6 top-[5px] rounded-lg",
      },
      color: {
        primary: "border border-b-2 border-primary-500",
        success: "border border-b-2 border-green-500",
        danger: "border border-b-2 border-red-500",
        default: "border border-b-2 border-gray-300 dark:border-gray-600",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
    },
  },
);

export interface SwitchProps
  extends TouchableOpacityProps, VariantProps<typeof switchVariants> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  SwitchProps
>(
  (
    {
      className,
      size,
      color,
      checked = false,
      onCheckedChange,
      onPressIn,
      ...props
    },
    ref,
  ) => {
    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onCheckedChange?.(!checked);
    };

    const thumbPosition = checked
      ? size === "sm"
        ? "left-7"
        : size === "md"
          ? "left-7"
          : "left-8"
      : "left-1";

    const activeColor = checked
      ? color === "default"
        ? "bg-blue-400 dark:bg-blue-500"
        : color === "primary"
          ? "bg-blue-400 dark:bg-blue-500"
          : color === "success"
            ? "bg-green-400 dark:bg-green-500"
            : color === "danger"
              ? "bg-red-400 dark:bg-red-500"
              : "bg-blue-400 dark:bg-blue-500"
      : "bg-gray-300 dark:bg-gray-600";

    return (
      <TouchableOpacity
        ref={ref}
        className={cn(switchVariants({ size, className }), activeColor)}
        activeOpacity={0.8}
        onPress={handlePress}
        onPressIn={(e) => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onPressIn?.(e);
        }}
        {...props}
      >
        <View
          className={cn(switchThumbVariants({ size, color }), thumbPosition)}
        />
      </TouchableOpacity>
    );
  },
);

Switch.displayName = "Switch";

export { Switch, switchVariants };

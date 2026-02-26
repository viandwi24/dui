import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
// @ts-ignore
import * as NW from "nativewind";
export const TextStyled = NW.styled(RNText, { className: "style" });

const textVariants = cva("", {
  variants: {
    type: {
      raw: "text-gray-900 dark:text-gray-100",
      title: "text-2xl font-bold text-gray-900 dark:text-gray-100",
      h2: "text-xl font-semibold text-gray-900 dark:text-gray-100",
      muted: "text-gray-500 dark:text-gray-400",
      link: "text-blue-600 dark:text-blue-400 underline",
      no: "text-foreground",
    },
  },
  defaultVariants: {
    type: "no",
  },
});

export interface TextProps
  extends RNTextProps, VariantProps<typeof textVariants> {}

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <TextStyled
        className={cn(textVariants({ type }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";

export { Text, textVariants };

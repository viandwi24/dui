import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { View as RNView } from "react-native";
import { View, ViewProps } from "./view";

const cardVariants = cva("rounded-lg border-[3px] overflow-hidden", {
  variants: {
    variant: {
      default: "border-neutral-200 dark:border-neutral-800",
      outlined: "border-blue-400",
      success: "border-green-400",
      warning: "border-orange-400",
      danger: "border-red-400",
    },
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const cardHeaderVariants = cva(
  "flex flex-row items-center justify-between mb-3",
  {
    variants: {
      size: {
        sm: "mb-2",
        md: "mb-3",
        lg: "mb-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const cardContentVariants = cva("", {
  variants: {
    size: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface CardProps
  extends ViewProps, VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

export interface CardHeaderProps
  extends ViewProps, VariantProps<typeof cardHeaderVariants> {
  children: React.ReactNode;
}

export interface CardContentProps
  extends ViewProps, VariantProps<typeof cardContentVariants> {
  children: React.ReactNode;
}

const Card = React.forwardRef<RNView, CardProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(cardVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </View>
    );
  },
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<RNView, CardHeaderProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(cardHeaderVariants({ size, className }))}
        {...props}
      >
        {children}
      </View>
    );
  },
);
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<RNView, CardContentProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(cardContentVariants({ size, className }))}
        {...props}
      >
        {children}
      </View>
    );
  },
);
CardContent.displayName = "CardContent";

export { Card, CardContent, CardHeader, cardVariants };

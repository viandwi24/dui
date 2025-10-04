import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { Icon } from './icon';

const toastVariants = cva(
  'mx-4 p-4 rounded-2xl border-2 flex flex-row items-center gap-3 shadow-lg',
  {
    variants: {
      variant: {
        success: 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
        error: 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
        warning: 'bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800',
        info: 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const iconMap = {
  success: 'ph:check-circle',
  error: 'ph:x-circle',
  warning: 'ph:warning-circle',
  info: 'ph:info',
};

const colorMap = {
  success: '#16a34a',
  error: '#dc2626',
  warning: '#ea580c',
  info: '#2563eb',
};

export interface ToastProps extends VariantProps<typeof toastVariants> {
  message: string;
  visible: boolean;
  onHide?: () => void;
  duration?: number;
}

export function Toast({ 
  message, 
  visible, 
  variant = 'info', 
  onHide, 
  duration = 3000 
}: ToastProps) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    if (visible) {
      // Show animation
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto hide after duration
      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      hideToast();
    }
  }, [visible]);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <View className={cn(toastVariants({ variant }))}>
        <Icon 
          name={iconMap[variant || 'info']} 
          size={20} 
          color={colorMap[variant || 'info']} 
        />
        <Text className={cn(
          'flex-1 font-medium',
          variant === 'success' && 'text-green-700 dark:text-green-300',
          variant === 'error' && 'text-red-700 dark:text-red-300',
          variant === 'warning' && 'text-orange-700 dark:text-orange-300',
          variant === 'info' && 'text-blue-700 dark:text-blue-300'
        )}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
}
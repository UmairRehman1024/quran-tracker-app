import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { Pressable, type PressableProps } from "react-native";

import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "items-center justify-center rounded-lg border border-transparent",
  {
    variants: {
      variant: {
        default: "bg-primary",
        outline:
          "border-border bg-background dark:border-input dark:bg-input/30",
        secondary: "bg-secondary dark:bg-secondary-dark",
        ghost: "bg-transparent",
        destructive: "bg-destructive/10",
      },
      size: {
        default: "h-8 px-2.5",
        sm: "h-7 px-2.5",
        lg: "h-9 px-4",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva("font-sans-medium text-sm", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      outline: "text-foreground dark:text-foreground-dark",
      secondary: "text-secondary-foreground dark:text-foreground-dark",
      ghost: "text-foreground dark:text-foreground-dark",
      destructive: "text-destructive dark:text-destructive-dark",
    },
    size: {
      default: "text-sm",
      sm: "text-[13px]",
      lg: "text-sm",
      icon: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = PressableProps &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
    className?: string;
    textClassName?: string;
  };

export function Button({
  className,
  textClassName,
  variant = "default",
  size = "default",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, size }),
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          className={cn(
            buttonTextVariants({ variant, size }),
            textClassName,
          )}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

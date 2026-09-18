import { Text as RNText, type TextProps } from "react-native";

import { cn } from "@/lib/utils";

type TextVariant = "brand" | "title" | "heading" | "body" | "muted" | "label";

const variantClass: Record<TextVariant, string> = {
  brand:
    "font-sans-extrabold text-3xl tracking-tight text-foreground dark:text-foreground-dark",
  title:
    "font-sans-semibold text-2xl tracking-tight text-foreground dark:text-foreground-dark",
  heading:
    "font-sans-extrabold text-4xl tracking-tight text-foreground dark:text-foreground-dark",
  body: "font-sans text-base text-foreground dark:text-foreground-dark",
  muted:
    "font-sans-light text-sm text-muted-foreground dark:text-muted-foreground-dark",
  label:
    "font-sans text-sm text-muted-foreground dark:text-muted-foreground-dark",
};

type AppTextProps = TextProps & {
  variant?: TextVariant;
  className?: string;
};

export function Text({
  variant = "body",
  className,
  ...props
}: AppTextProps) {
  return (
    <RNText className={cn(variantClass[variant], className)} {...props} />
  );
}

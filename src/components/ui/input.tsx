import { TextInput, type TextInputProps } from "react-native";

import { cn } from "@/lib/utils";

type InputProps = TextInputProps & {
  className?: string;
};

export function Input({ className, placeholderTextColor, ...props }: InputProps) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor ?? "#8E8E8E"}
      className={cn(
        "h-10 w-full rounded-lg border border-input bg-background px-3 font-sans text-sm text-foreground dark:border-input-dark dark:bg-background-dark dark:text-foreground-dark",
        className,
      )}
      {...props}
    />
  );
}

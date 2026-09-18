import { Pressable } from "react-native";

import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export function CheckInButton({
  checkedInToday,
  onPress,
}: {
  checkedInToday: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: checkedInToday }}
      disabled={checkedInToday}
      onPress={onPress}
      className={cn(
        "rounded-lg px-8 py-5",
        checkedInToday
          ? "bg-primary"
          : "bg-muted dark:bg-muted-dark",
      )}
    >
      <Text
        className={cn(
          "text-center font-sans-medium text-lg tracking-wide",
          checkedInToday
            ? "text-primary-foreground"
            : "text-foreground dark:text-foreground-dark",
        )}
      >
        {checkedInToday ? "Read today" : "Did you read Quran today?"}
      </Text>
    </Pressable>
  );
}

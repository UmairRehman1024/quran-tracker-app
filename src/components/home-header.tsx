import { View } from "react-native";

import { Text } from "@/components/ui/text";

function daysLabel(count: number) {
  return count === 1 ? "day" : "days";
}

export function HomeHeader({
  firstName,
  currentStreak,
  longestStreak,
}: {
  firstName: string;
  currentStreak: number;
  longestStreak: number;
}) {
  return (
    <View className="relative">
      <View className="min-w-0 items-center">
        <Text
          variant="muted"
          className="text-base font-sans-light tracking-wide"
        >
          Hi {firstName},
        </Text>
        <Text variant="heading" className="mt-1 text-center">
          You have read Quran for {currentStreak} {daysLabel(currentStreak)}
        </Text>
        <Text variant="muted" className="mt-2">
          Best streak: {longestStreak} {daysLabel(longestStreak)}
        </Text>
      </View>
      <View className="absolute right-0 top-0 h-8 w-8 items-center justify-center rounded-full bg-muted dark:bg-muted-dark">
        <Text className="font-sans-medium text-sm text-foreground dark:text-foreground-dark">
          {firstName.charAt(0).toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

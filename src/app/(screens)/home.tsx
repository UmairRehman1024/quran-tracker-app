import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CheckInButton } from "@/components/check-in-button";
import { HomeHeader } from "@/components/home-header";
import { WeeklyCalendar } from "@/components/weekly-calendar";
import { Text } from "@/components/ui/text";

const QUOTE =
  "Read the Quran, for indeed it will come on the Day of Resurrection as an intercessor for its companions.";

const MOCK = {
  firstName: "Umair",
  currentStreak: 7,
  longestStreak: 21,
  today: "2026-09-18",
  readDates: [
    "2026-09-12",
    "2026-09-13",
    "2026-09-14",
    "2026-09-15",
    "2026-09-16",
    "2026-09-17",
  ],
};

export default function HomeScreen() {
  const [checkedInToday, setCheckedInToday] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
      <ScrollView
        contentContainerClassName="flex-grow px-6 py-8"
        keyboardShouldPersistTaps="handled"
      >
        <HomeHeader
          firstName={MOCK.firstName}
          currentStreak={
            checkedInToday ? MOCK.currentStreak + 1 : MOCK.currentStreak
          }
          longestStreak={MOCK.longestStreak}
        />

        <View className="flex-1 items-center justify-center py-10">
          <CheckInButton
            checkedInToday={checkedInToday}
            onPress={() => setCheckedInToday(true)}
          />
        </View>

        <View className="w-full flex-1 items-center pb-8">
          <WeeklyCalendar
            readDates={
              checkedInToday
                ? [...MOCK.readDates, MOCK.today]
                : MOCK.readDates
            }
            today={MOCK.today}
          />
        </View>

        <View className="mx-auto w-full max-w-md gap-5 pb-2">
          <View className="h-px w-full bg-border dark:bg-border-dark" />
          <Text
            variant="muted"
            className="text-center text-sm leading-relaxed font-sans-light"
          >
            “{QUOTE}”
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TimezoneForm } from "@/components/timezone-form";
import { Text } from "@/components/ui/text";

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 items-center justify-center px-6 py-8">
        <View className="w-full max-w-md items-center gap-6">
          <View className="items-center gap-2">
            <Text variant="title" className="text-center">
              Choose your timezone
            </Text>
            <Text variant="muted" className="text-center">
              Streaks count by your local calendar day. Pick the city you are
              in.
            </Text>
          </View>
          <TimezoneForm onContinue={() => router.push("/home")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

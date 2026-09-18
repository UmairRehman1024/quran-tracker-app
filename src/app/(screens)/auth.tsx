import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 items-center justify-center gap-6 p-4">
        <View className="items-center gap-2">
          <Text variant="brand">Quran Tracker</Text>
          <Text variant="muted" className="text-center">
            Check in once a day. Streaks follow your local calendar.
          </Text>
        </View>
        <View className="flex-row gap-3">
          <Button
            variant="outline"
            size="lg"
            onPress={() => router.push("/onboarding")}
          >
            Sign in
          </Button>
          <Button size="lg" onPress={() => router.push("/onboarding")}>
            Sign up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

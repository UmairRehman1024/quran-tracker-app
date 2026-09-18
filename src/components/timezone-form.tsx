import { useState } from "react";
import { Pressable, useColorScheme, View } from "react-native";
import { Check, Globe } from "lucide-react-native";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

type TimezoneFormProps = {
  suggestedTimezone?: string;
  suggestedCity?: string;
  suggestedRegion?: string;
  localTime?: string;
  onContinue?: () => void;
};

export function TimezoneForm({
  suggestedTimezone = "Europe/London",
  suggestedCity = "London",
  suggestedRegion = "United Kingdom",
  localTime = "6:19 PM",
  onContinue,
}: TimezoneFormProps) {
  const colorScheme = useColorScheme();
  const mutedIcon = colorScheme === "dark" ? "#A3A3A3" : "#8E8E8E";
  const [usingSuggested, setUsingSuggested] = useState(true);
  const [query, setQuery] = useState("");

  return (
    <View className="w-full max-w-md gap-5">
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: usingSuggested }}
        onPress={() => setUsingSuggested(true)}
        className={cn(
          "flex-row items-center gap-3 rounded-xl border bg-card px-3 py-3 dark:bg-card-dark",
          usingSuggested
            ? "border-primary/40"
            : "border-border dark:border-border-dark",
        )}
      >
        <View className="h-8 w-8 items-center justify-center rounded-lg bg-muted dark:bg-muted-dark">
          {usingSuggested ? (
            <Check size={16} color="#0F9F59" />
          ) : (
            <Globe size={16} color={mutedIcon} />
          )}
        </View>
        <View className="min-w-0 flex-1">
          <Text variant="muted" className="text-xs">
            {usingSuggested
              ? "Using time on this device"
              : "Suggested from this device"}
          </Text>
          <View className="mt-0.5 flex-row items-baseline justify-between gap-3">
            <View className="min-w-0 flex-1">
              <Text className="font-sans-medium text-foreground dark:text-foreground-dark">
                {suggestedCity}
              </Text>
              <Text variant="muted" className="text-xs">
                {suggestedRegion} · {suggestedTimezone.split("/").pop()}
              </Text>
            </View>
            <Text className="font-sans text-xs tabular-nums text-muted-foreground dark:text-muted-foreground-dark">
              {localTime}
            </Text>
          </View>
        </View>
      </Pressable>

      <View className="gap-2">
        <Text variant="label">Or search for a city</Text>
        <View className="relative">
          <View className="absolute left-3 top-0 z-10 h-10 justify-center">
            <Globe size={16} color={mutedIcon} />
          </View>
          <Input
            value={query}
            onChangeText={(text) => {
              setQuery(text);
              if (text.length > 0) setUsingSuggested(false);
            }}
            placeholder="Start typing a city..."
            className="pl-9"
          />
        </View>
      </View>

      <Text variant="muted">
        Your reading day starts at midnight in {suggestedCity}. It is{" "}
        <Text className="font-sans-medium text-foreground dark:text-foreground-dark">
          {localTime}
        </Text>{" "}
        there now.
      </Text>

      <Button size="lg" onPress={onContinue} className="w-full">
        Continue
      </Button>
    </View>
  );
}

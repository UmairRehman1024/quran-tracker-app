import { useMemo, useState } from "react";
import { Pressable, useColorScheme, View } from "react-native";
import {
  addDays,
  addWeeks,
  format,
  startOfWeek,
  subWeeks,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function WeeklyCalendar({
  readDates,
  today,
}: {
  readDates: string[];
  today: string;
}) {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === "dark" ? "#FAFAFA" : "#171717";
  const [week, setWeek] = useState(() => new Date(`${today}T12:00:00`));
  const readSet = useMemo(() => new Set(readDates), [readDates]);

  const days = useMemo(() => {
    const start = startOfWeek(week, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [week]);

  return (
    <View className="w-[280px] gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-sans-semibold text-sm text-foreground dark:text-foreground-dark">
          {format(week, "MMMM yyyy")}
        </Text>
        <View className="flex-row gap-1">
          <Button
            variant="outline"
            size="icon"
            accessibilityLabel="Previous week"
            onPress={() => setWeek((prev) => subWeeks(prev, 1))}
          >
            <ChevronLeft size={16} color={iconColor} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            accessibilityLabel="Next week"
            onPress={() => setWeek((prev) => addWeeks(prev, 1))}
          >
            <ChevronRight size={16} color={iconColor} />
          </Button>
        </View>
      </View>

      <View className="rounded-md border border-border bg-background p-2 shadow-sm dark:border-border-dark dark:bg-card-dark">
        <View className="mb-1 flex-row">
          {WEEKDAY_LABELS.map((label) => (
            <View key={label} className="flex-1 items-center py-1">
              <Text className="font-sans-medium text-xs text-muted-foreground dark:text-muted-foreground-dark">
                {label}
              </Text>
            </View>
          ))}
        </View>
        <View className="flex-row">
          {days.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            const isRead = readSet.has(dateStr);
            const isFuture = dateStr > today;

            return (
              <Pressable
                key={dateStr}
                disabled={isFuture}
                className="flex-1 items-center py-1"
              >
                <View
                  className={cn(
                    "h-8 w-8 items-center justify-center rounded-md",
                    isRead && "bg-primary",
                    isFuture && "opacity-50",
                  )}
                >
                  <Text
                    className={cn(
                      "font-sans text-sm",
                      isRead
                        ? "text-primary-foreground"
                        : "text-foreground dark:text-foreground-dark",
                    )}
                  >
                    {format(day, "d")}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

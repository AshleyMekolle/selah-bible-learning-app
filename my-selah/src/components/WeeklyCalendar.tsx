import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

type Props = {
  completedDays: number;
};

export default function WeekCalendar({ completedDays }: Props) {
  return (
    <View style={styles.container}>
      {DAYS.map((day, index) => {
        const completed = index < completedDays;

        return (
          <View
            key={index}
            style={[
              styles.day,
              completed && styles.completedDay,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                completed && styles.completedText,
              ]}
            >
              {day}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  day: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  completedDay: {
    backgroundColor: colors.primary,
  },
  dayText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: typography.medium,
  },
  completedText: {
    color: "#fff",
  },
});

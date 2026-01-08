import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { typography } from "../theme/typography";
import { colors } from "../theme/color";
import { useReading } from "../context/ReadingContext";
import Card from "../components/Card";
import WeeklyReflection from "../components/weeklyReflection";

export default function ProgressScreen() {
  const { streak , getWeeklySummary, isSunday} = useReading()

  const summary = getWeeklySummary()

  const getDayLabels = () => ["S", "M", "T", "W", "T", "F", "S"];

  {isSunday() && (
  <WeeklyReflection completedDays={summary.completedDays} />
)}

  return(
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Your Journey</Text>
        <Text style={styles.subtitle}>
          Every moment in the Word is meaningful.
        </Text>
      </View>

      <View style={styles.streakHero}>
        <View style={styles.streakIconContainer}>
          <Ionicons
            name={streak > 0 ? "flame" : "flame-outline"}
            size={48}
            color={streak > 0 ? colors.accent : colors.textSecondary}
          />
        </View>
        <View style={styles.streakContent}>
          <Text style={styles.streakValue}>
            {streak}
          </Text>
          <Text style={styles.streakLabel}>
            day{streak === 1 ? "" : "s"} streak
          </Text>
          <Text style={styles.streakSubtext}>
            {streak === 0 
              ? "Begin your reading rhythm today" 
              : "Keep the momentum going"}
          </Text>
        </View>
      </View>

      <View style={styles.weekCard}>
      <Card >
        <View style={styles.cardHeader}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <Text style={styles.weekCount}>
            {Math.min(streak, 7)}/7
          </Text>
        </View>

        <View style={styles.weekGrid}>
          {getDayLabels().map((day, index) => {
            const active = index < Math.min(streak, 7);
            return(
              <View key={index} style={styles.dayContainer}>
                <View
                  style={[
                    styles.dayCircle,
                    active && styles.dayCircleActive
                  ]}
                >
                  {active && (
                    <Ionicons 
                      name="checkmark" 
                      size={10} 
                      color={colors.surface} 
                    />
                  )}
                </View>
                <Text style={[
                  styles.dayLabel,
                  active && styles.dayLabelActive
                ]}>
                  {day}
                </Text>
              </View>
            )
          })}
        </View>

        <Text style={styles.weekHint}>
          {streak === 0 
            ? "Start today to light up your first circle" 
            : `${7 - Math.min(streak, 7)} more day${7 - Math.min(streak, 7) === 1 ? '' : 's'} to complete the week`}
        </Text>
      </Card>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Ionicons name="book-outline" size={20} color={colors.primary} />
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>Total Days</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="trophy-outline" size={20} color={colors.accent} />
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>Best Streak</Text>
        </View>
      </View>

      <View style={styles.encouragementCard}>

      <Card >
        <View style={styles.encouragementIcon}>
          <Ionicons name="heart" size={20} color={colors.primary} />
        </View>
        <Text style={styles.encouragementTitle}>
          Grace meets you where you are.
        </Text>
        <Text style={styles.encouragementText}>
          {streak === 0 
            ? "Every journey begins with a single step. Today could be your day one." 
            : "You're building something beautiful, one day at a time."}
        </Text>
      </Card>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 22,
  },

  streakHero: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    gap: 20,
  },
  streakIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.accent + '15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakContent: {
    flex: 1,
  },
  streakValue: {
    fontSize: 40,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -1,
    lineHeight: 44,
  },
  streakLabel: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  streakSubtext: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  weekCard: {
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  weekCount: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.primary,
  },
  weekGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dayContainer: {
    alignItems: 'center',
    gap: 8,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.textSecondary + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCircleActive: {
    backgroundColor: colors.primary,
  },
  dayLabel: {
    fontSize: 11,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  dayLabelActive: {
    color: colors.textPrimary,
  },
  weekHint: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },

  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },

  encouragementCard: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.primary + '08',
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  encouragementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  encouragementTitle: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  encouragementText: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
})
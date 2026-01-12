import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function WhoAmICard() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("WhoAmI")}
      activeOpacity={0.9}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="help-circle" size={28} color={colors.accent} />
        </View>
        <View style={styles.playBadge}>
          <Ionicons name="game-controller" size={14} color={colors.surface} />
          <Text style={styles.playBadgeText}>PLAY</Text>
        </View>
      </View>

      <Text style={styles.title}>Who Am I?</Text>
      <Text style={styles.subtitle}>
        Guess the Bible character from mysterious clues
      </Text>

      <View style={styles.features}>
        <View style={styles.feature}>
          <Ionicons name="help-circle-outline" size={14} color={colors.primary} />
          <Text style={styles.featureText}>Multiple clues</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="trophy-outline" size={14} color={colors.primary} />
          <Text style={styles.featureText}>Earn points</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.cta}>Start Guessing</Text>
        <Ionicons name="arrow-forward-circle" size={22} color={colors.accent} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.accent + '25',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent + '18',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  playBadgeText: {
    fontSize: 10,
    fontFamily: typography.semibold,
    color: colors.surface,
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 22,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  features: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featureText: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textPrimary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.textSecondary + '12',
  },
  cta: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.accent,
    letterSpacing: 0.3,
  },
});
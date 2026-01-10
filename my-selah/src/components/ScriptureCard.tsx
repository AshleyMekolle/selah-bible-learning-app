import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";

interface ScriptureCardProps {
  verse: string;
  reference: string;
  onPress?: () => void;
}

export default function ScriptureCard({ verse, reference, onPress }: ScriptureCardProps) {
  const content = (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="bookmark" size={20} color={colors.primary} />
      </View>
      <Text style={styles.verseText}>"{verse}"</Text>
      <Text style={styles.reference}>{reference}</Text>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <Ionicons name="heart" size={16} color={colors.primary} />
        <Text style={styles.footerText}>Save to favorites</Text>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={styles.touchable}>{content}</View>;
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + "10",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  verseText: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 24,
    marginBottom: 12,
    fontStyle: "italic",
    textAlign: "center",
  },
  reference: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.primary,
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  divider: {
    height: 1,
    backgroundColor: colors.primary,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
});
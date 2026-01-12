import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";
import { useNavigation } from "@react-navigation/native";

export default function WhoAmICard() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("WhoAmI")}
    >
      <Text style={styles.title}>Who Am I?</Text>
      <Text style={styles.subtitle}>
        A daily Bible character guessing game
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: typography.medium,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
});

import { Text, StyleSheet } from "react-native";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/color";

export default function QuestionText({ text }: { text: string }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.medium,
    fontSize: 18,
    color: colors.textPrimary,
    lineHeight: 26,
    marginBottom: 20,
  },
});

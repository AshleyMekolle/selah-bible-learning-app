import { View, Text, StyleSheet } from "react-native";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/color";

type Props = {
  current: number;
  total: number;
};

export default function QuizProgress({ current, total }: Props) {
  return (
    <Text style={styles.text}>
      Question {current} of {total}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.medium,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 12,
  },
});

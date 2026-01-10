import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";

type Props = {
  text: string;
  selected: boolean;
  correct: boolean;
  disabled: boolean;
  onPress: () => void;
};

export default function AnswerOption({
  text,
  selected,
  correct,
  disabled,
  onPress,
}: Props) {
  const background =
    selected && correct
      ? "#E6F4EA"
      : selected && !correct
      ? "#FDEAEA"
      : colors.surface;

  const icon =
    selected && correct
      ? "checkmark-circle"
      : selected
      ? "close-circle"
      : null;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.option, { backgroundColor: background }]}
    >
      <Text style={styles.text}>{text}</Text>
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={correct ? colors.primary : "#D64545"}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: typography.regular,
    fontSize: 15,
    color: colors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
});

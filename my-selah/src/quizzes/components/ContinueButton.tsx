import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";

export default function ContinueButton({
  onPress,
  label = "Continue",
}: {
  onPress: () => void;
  label?: string;
}) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },
  text: {
    fontFamily: typography.medium,
    color: "#FFF",
    fontSize: 15,
  },
});

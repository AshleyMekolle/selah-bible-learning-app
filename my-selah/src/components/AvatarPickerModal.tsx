import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";

const EMOJIS = ["🕊️", "🌿", "📖", "✨", "🔥", "💧", "🌸", "🛐"];

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (emoji: string) => void;
};

export default function AvatarPickerModal({
  visible,
  onClose,
  onSelect,
}: Props) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Choose your avatar</Text>

          <View style={styles.grid}>
            {EMOJIS.map(emoji => (
              <Pressable
                key={emoji}
                style={styles.emojiButton}
                onPress={() => {
                  onSelect(emoji);
                  onClose();
                }}
              >
                <Text style={styles.emoji}>{emoji}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    width: "80%",
  },
  title: {
    fontFamily: typography.medium,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  emojiButton: {
    padding: 10,
  },
  emoji: {
    fontSize: 28,
  },
});

import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import { Ionicons } from "@expo/vector-icons";

// Define icon options with names and colors
const ICONS = [
  { name: "heart" as const, color: "#EF4444" },
  { name: "star" as const, color: "#F59E0B" },
  { name: "book" as const, color: "#3B82F6" },
  { name: "leaf" as const, color: "#10B981" },
  { name: "flame" as const, color: "#F97316" },
  { name: "water" as const, color: "#0EA5E9" },
  { name: "flower" as const, color: "#EC4899" }, 
  { name: "moon" as const, color: "#8B5CF6" },
  { name: "sunny" as const, color: "#EAB308" },
  { name: "cloud" as const, color: "#94A3B8" }, 
  { name: "fish" as const, color: "#06B6D4" },
  { name: "rose" as const, color: "#DB2777" }, 
  { name: "diamond" as const, color: "#7C3AED" },
  { name: "shield" as const, color: "#14B8A6" },
  { name: "compass" as const, color: "#6366F1" }, 
];

type Props = {
  visible: boolean;
  onClose: () => void;
  onSelect: (icon: string) => void;
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
          <Text style={styles.subtitle}>Select an icon that represents you</Text>

          <View style={styles.grid}>
            {ICONS.map((icon, index) => (
              <Pressable
                key={index}
                style={styles.iconButton}
                onPress={() => {
                  onSelect(icon.name);
                  onClose();
                }}
              >
                <View style={[styles.iconContainer, { backgroundColor: icon.color + "20" }]}>
                  <Ionicons 
                    name={icon.name} 
                    size={28} 
                    color={icon.color} 
                  />
                </View>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </Pressable>
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
    padding: 20,
  },
  modal: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontFamily: typography.semibold,
    fontSize: 18,
    color: colors.textPrimary,
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: typography.regular,
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    marginBottom: 24,
  },
  iconButton: {
    padding: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  closeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  closeButtonText: {
    fontFamily: typography.medium,
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
});
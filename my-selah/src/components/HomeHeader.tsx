import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../theme/color";
import { useAvatar } from "../context/AvatarContext";
import AvatarPickerModal from "../components/AvatarPickerModal";

export default function HomeHeaderRight() {
  const { avatar, setAvatar } = useAvatar();
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => setOpen(true)} style={styles.avatar}>
          <Text style={styles.avatarText}>{avatar}</Text>
        </Pressable>

        <View style={styles.xp}>
          <Text style={styles.xpText}>120 XP</Text>
        </View>

        <Ionicons name="trophy-outline" size={22} color={colors.primary} />
      </View>

      <AvatarPickerModal
        visible={open}
        onClose={() => setOpen(false)}
        onSelect={setAvatar}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
  },
  xp: {
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  xpText: {
    fontSize: 12,
    color: colors.textPrimary,
    fontWeight: "600",
  },
});

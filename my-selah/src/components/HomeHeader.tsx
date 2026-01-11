import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../theme/color";
import { useAvatar } from "../context/AvatarContext";
import AvatarPickerModal from "../components/AvatarPickerModal";
import { typography } from "../theme/typography";
import { useXP } from "../context/XPContext";

export default function HomeHeaderRight() {
  const { avatar, setAvatar } = useAvatar();
  const { xp, level } = useXP();
  const [open, setOpen] = useState(false);
  const iconName = avatar || "person";

  return (
    <>
      <View style={styles.container}>
        <View style={styles.xpContainer}>
          <Ionicons 
            name="trophy" 
            size={15} 
            color="#F59E0B" 
            style={styles.xpIcon}
          />
          <Text style={styles.xpText}>{xp}</Text>
        </View>

        <Pressable onPress={() => setOpen(true)} style={styles.avatarButton}>
          <View style={styles.avatarContainer}>
            <Ionicons 
              name={iconName as any} 
              size={15} 
              color={colors.primary}
            />
          </View>
        </Pressable>
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
    marginRight: 12,
  },
  avatarButton: {
    padding: 4,
  },
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: colors.primary + "15",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: colors.primary + "30",
  },
  xpContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.primary + "30",
  },
  xpIcon: {
    marginRight: 4,
  },
  xpText: {
    fontSize: 12,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
});
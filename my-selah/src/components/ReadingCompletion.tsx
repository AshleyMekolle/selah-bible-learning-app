import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";


type Props ={
    completed: boolean;
    onComplete: () => void
}

export default function ReadingCompletion ({completed, onComplete}: Props){
    if(completed){
        return(
            <View style={styles.completedContainer}>
                <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.primary}
                />
                <Text style={styles.completedText}>
                 You spent time in the Word today.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: typography.medium,
    fontSize: 15,
  },
  completedContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  completedText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
});
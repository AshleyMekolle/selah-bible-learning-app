import { Ionicons } from "@expo/vector-icons";
import { colors } from "./color";
import { typography } from "./typography";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import ActionButton from "./ActionButton";

type Props={
    book:string,
    chapter:number,
    testament:"OT" | "NT",
    onPress: () => void
}
export default function TodayReadingCard({book, chapter, testament, onPress}: Props){
    const isOT = testament === "OT"
    return(
       <Card>
      <View style={styles.header}>
        <Ionicons
          name={isOT ? "book-outline" : "book"}
          size={18}
          color={colors.primary}
        />
        <Text style={styles.testament}>
          {isOT ? "Old Testament" : "New Testament"}
        </Text>
      </View>

      <Text style={styles.reading}>
        {book} {chapter}
      </Text>

      <ActionButton
        label="Read"
        iconName="arrow-forward-outline"
        onPress={onPress}
      />
    </Card>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
     gap: 6,
    marginBottom: 8,
  },
  testament: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  reading: {
    fontSize: 20,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 12,
  },
});

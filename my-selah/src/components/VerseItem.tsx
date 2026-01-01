import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";

type Props ={
    number: number,
    text: string
}

export default function VerseItem ({number, text}: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
    marginBottom: 24,
  },
  number: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 28,
  },
})
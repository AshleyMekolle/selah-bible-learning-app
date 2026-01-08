import { View, Text, StyleSheet } from "react-native";
import { typography } from "../theme/typography";
import { colors } from "../theme/color";

type Props = {
    completedDays: number
}

export default function WeeklyReflection({completedDays}: Props){
    let message = "Every moment you opened the Word mattered.";

    if(completedDays === 7){
        message = "You remained faithful this week. Selah and rest.";
    } else if (completedDays >= 4){
        message = "You returned often. Grace met you each time.";
    } else if (completedDays >= 1)
        message = "You showed up. That is enough to begin again.";

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Weekly Reflection</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        padding: 18,
        borderRadius: 16,
        backgroundColor: colors.surface,
        marginTop: 20
    },
    title:{
        fontSize:16,
        fontFamily: typography.semibold,
        marginBottom:8,
        color: colors.textPrimary
    },
    text:{
        fontSize:14,
        lineHeight:22,
        color: colors.textSecondary
    }
})
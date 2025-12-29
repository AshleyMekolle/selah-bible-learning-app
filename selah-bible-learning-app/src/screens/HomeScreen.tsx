import { View, Text, StyleSheet } from "react-native"
import Card from "../components/card";
import ActionButton from "../components/ActionButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../theme/colors";
import { useReading } from "../context/ReadingContext";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../theme/typography";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {

    const {streak} = useReading()
  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.greeting}>Good Morning!</Text>
            {streak === 0 ? (
                <Text style={styles.emptyStreakText}>
                    A gentle start is a great start beloved
                </Text>
            ) : (
                <View style={styles.streakBadge}>
                    <Ionicons
                        name="flame"
                        size={20}
                        color={colors.accent}
                    />
                    <Text style={styles.streakText}>
                        {streak} day{streak !== 1 ? "s" : ""}
                    </Text>
                </View>
            )}
        </View>

        <Card>
            <Text style={styles.cardTitle}>
                Today's Reading
            </Text>
            <Text style={styles.cardText}>Start today's bible reading and keep your streak alive!</Text>
        </Card>

        <View style={styles.actions}>
            <ActionButton 
                label="Read" 
                iconName="book-outline"
                onPress={() => navigation.navigate('Read')}
            />
            <ActionButton 
                label="Study" 
                iconName="school-outline"
                onPress={() => navigation.navigate('Progress')}
            />
            <ActionButton 
                label="Reflect"
                iconName="create-outline" 
                onPress={() => navigation.navigate('Reflect')}
            />

            <ActionButton
        label="Reflection History"
        iconName="create-outline"
        onPress={() => navigation.navigate("ReflectionHistory")}
      />
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background
    },
    header: {
        marginBottom: 24,
    },
    greeting: {
        fontSize: 28,
        fontFamily: typography.semibold,
        marginBottom: 8,
        color: colors.textPrimary,
        letterSpacing: -0.5,
    },
    streakBadge: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: colors.surface,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        gap: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    streakText: {
        fontSize: 15,
        color: colors.textPrimary,
        fontFamily: typography.semibold,
        letterSpacing: 0.2,
    },
    emptyStreakText: {
        fontSize: 15,
        color: colors.textSecondary,
        fontFamily: typography.regular,
        fontStyle: "italic",
        marginTop: 4,
    },
    cardTitle: {
        fontSize: 20,
        fontFamily: typography.semibold,
        marginBottom: 8,
        color: colors.textPrimary,
        letterSpacing: -0.3,
    },
    cardText: {
        fontSize: 15,
        fontFamily: typography.regular,
        color: colors.textSecondary,
        lineHeight: 22,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
})
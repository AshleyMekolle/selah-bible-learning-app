import { View, Text, StyleSheet } from "react-native"
import Card from "../components/Card";
import { useState, useEffect } from "react";
import ActionButton from "../components/ActionButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../theme/color";
import { useReading } from "../context/ReadingContext";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../theme/typography";
import TodayReadingCard from "../components/TodayReadingCard";
import { getTodayReading } from "../utils/getTodayReading";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {

    const { completedToday } = useReading();


    const [todayReading, setTodayReading] = useState<any>(null);

useEffect(() => {
  const load = async () => {
    const reading = await getTodayReading();
    setTodayReading(reading);
  };

  load();
}, []);

  return(
    <View style={styles.container}>
       <Card>
  <View style={styles.cardHeader}>
    <Ionicons
      name={completedToday ? "checkmark-circle" : "book-outline"}
      size={20}
      color={completedToday ? colors.primary : colors.textSecondary}
    />
    <Text style={styles.cardTitle}>Today’s Reading</Text>
  </View>

  <Text style={styles.cardText}>
    {completedToday
      ? "You’ve already spent time in the Word today."
      : "Set aside a quiet moment for today’s Scripture."}
  </Text>


</Card>

        {todayReading && (
  <TodayReadingCard
    book={todayReading.book}
    chapter={todayReading.chapter}
    testament={todayReading.testament}
    onPress={() => navigation.navigate("Read")}
  />
)}


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
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
        },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
})
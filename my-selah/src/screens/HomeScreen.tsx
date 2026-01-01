import { View, Text, StyleSheet, ScrollView } from "react-native"
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

    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 17) return "Good Afternoon";
      return "Good Evening";
    };

    useEffect(() => {
      const load = async () => {
        const reading = await getTodayReading();
        setTodayReading(reading);
      };

      load();
    }, []);

  return(
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
       {/* Header with Greeting */}
       <View style={styles.header}>
         <Text style={styles.greeting}>{getGreeting()}</Text>
         <Text style={styles.subGreeting}>Let's spend time in the Word</Text>
       </View>

       {/* Status Card */}
       <Card>
         <View style={styles.cardHeader}>
           <View style={styles.statusIndicator}>
             <Ionicons
               name={completedToday ? "checkmark-circle" : "book-outline"}
               size={24}
               color={completedToday ? colors.primary : colors.accent}
             />
           </View>
           <View style={styles.statusTextContainer}>
             <Text style={styles.cardTitle}>Today's Reading</Text>
             <Text style={styles.cardText}>
               {completedToday
                 ? "You've already spent time in the Word today."
                 : "Set aside a quiet moment for today's Scripture."}
             </Text>
           </View>
         </View>
       </Card>

       {/* Reading Card */}
       {todayReading && (
         <TodayReadingCard
           book={todayReading.book}
           chapter={todayReading.chapter}
           testament={todayReading.testament}
           onPress={() => navigation.navigate("Read")}
         />
       )}

       {/* Actions Section */}
       <View style={styles.actionsSection}>
         <Text style={styles.sectionLabel}>QUICK ACTIONS</Text>
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

       {/* Encouragement Card */}
       <View style={styles.encouragement}>
         <Text style={styles.encouragementIcon}>
            <Ionicons name="sparkles" size={24} color={colors.primary}/>
            </Text>
         <Text style={styles.encouragementText}>
           "Your word is a lamp to my feet and a light to my path."
         </Text>
         <Text style={styles.encouragementVerse}>Psalm 119:105</Text>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        marginBottom: 24,
    },
    greeting: {
        fontSize: 28,
        fontFamily: typography.semibold,
        color: colors.textPrimary,
        letterSpacing: -0.5,
        marginBottom: 4,
    },
    subGreeting: {
        fontSize: 16,
        fontFamily: typography.regular,
        color: colors.textSecondary,
    },
    statusCard: {
        marginBottom: 16,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },
    statusIndicator: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.accent + '15',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusTextContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: typography.semibold,
        color: colors.textPrimary,
        letterSpacing: -0.3,
        marginBottom: 6,
    },
    cardText: {
        fontSize: 14,
        fontFamily: typography.regular,
        color: colors.textSecondary,
        lineHeight: 20,
    },
    actionsSection: {
        marginTop: 8,
        marginBottom: 24,
    },
    sectionLabel: {
        fontSize: 11,
        fontFamily: typography.semibold,
        color: colors.textSecondary,
        letterSpacing: 1.2,
        marginBottom: 12,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    encouragement: {
        backgroundColor: colors.primary + '08',
        borderLeftWidth: 3,
        borderLeftColor: colors.primary,
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    encouragementIcon: {
        fontSize: 24,
        marginBottom: 8,
    },
    encouragementText: {
        fontSize: 14,
        fontFamily: typography.regular,
        color: colors.textPrimary,
        textAlign: 'center',
        lineHeight: 22,
        fontStyle: 'italic',
        marginBottom: 8,
    },
    encouragementVerse: {
        fontSize: 12,
        fontFamily: typography.semibold,
        color: colors.primary,
        letterSpacing: 0.5,
    },
})
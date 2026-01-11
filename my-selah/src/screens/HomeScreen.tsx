import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
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
import { getRandomScripture } from "../mocks/scripture";
import { ScriptureVerseCard } from "../components/ScriptureCard";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {

    const { completedToday } = useReading();
    const [todayReading, setTodayReading] = useState<any>(null);
    const [dailyScripture, setDailyScripture] = useState<any>(null);

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

     useEffect(() => {
      const scripture = getRandomScripture();
      setDailyScripture(scripture);
    }, []);

  return(
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

       <View style={styles.header}>
         <Text style={styles.greeting}>{getGreeting()}</Text>
         <Text style={styles.subGreeting}>Let's spend time in the Word</Text>
       </View>

       <Card>
         <View style={styles.cardHeader}>
           <View style={styles.statusIndicator}>
             <Ionicons
               name={completedToday ? "checkmark-circle" : "book-outline"}
               size={24}
               color={completedToday ? colors.primary : colors.textSecondary}
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

       {/* {todayReading && (
         <TodayReadingCard
           book={todayReading.book}
           chapter={todayReading.chapter}
           testament={todayReading.testament}
           onPress={() => navigation.navigate("Read")}
         />
       )} */}

       {dailyScripture && (
         <View style={styles.scriptureSection}>
           <Text style={styles.sectionLabel}>VERSE OF THE DAY</Text>
           <ScriptureVerseCard
             verse={dailyScripture.verse}
             reference={dailyScripture.reference}
             onPress={() => {
               console.log("Scripture pressed:", dailyScripture);
             }}
           />
         </View>
       )}

       <View style={styles.actionsSection}>
         <Text style={styles.sectionLabel}>QUICK ACTIONS</Text>
         <View style={styles.actions}>
           <ActionButton 
             label="Read" 
             iconName="book-outline"
             onPress={() => navigation.navigate('Read')}
           />
           <ActionButton 
             label="Progress" 
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

       <View style={styles.encouragement}>
         <Text style={styles.encouragementIcon}>
            <Ionicons name="sparkles" size={24} color={colors.primary}/>
            </Text>
         <Text style={styles.encouragementText}>
           "Your word is a lamp to my feet and a light to my path."
         </Text>
         <Text style={styles.encouragementVerse}>Psalm 119:105</Text>
       </View>

       
      <TouchableOpacity
  style={styles.quizCard}
  onPress={() => navigation.navigate("Quiz")}
  activeOpacity={0.9}
>
  <View style={styles.quizHeader}>
    <View style={styles.quizIconContainer}>
      <Ionicons name="book" size={28} color={colors.accent} />
    </View>
    <View style={styles.quizBadge}>
      <Text style={styles.quizBadgeText}>NEW</Text>
    </View>
  </View>

  <Text style={styles.quizTitle}>Bible Quiz</Text>
  <Text style={styles.quizSubtitle}>
    Test your knowledge and have fun learning Scripture
  </Text>

  <View style={styles.quizFeatures}>
    <View style={styles.quizFeature}>
      <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
      <Text style={styles.quizFeatureText}>Multiple topics</Text>
    </View>
    <View style={styles.quizFeature}>
      <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
      <Text style={styles.quizFeatureText}>Track your score</Text>
    </View>
  </View>

  <View style={styles.quizFooter}>
    <Text style={styles.quizCTA}>Start Quiz</Text>
    <Ionicons name="arrow-forward-circle" size={20} color={colors.primary} />
  </View>
</TouchableOpacity>
      
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
      card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardSubtitle: {
    marginTop: 6,
    color: colors.textSecondary,
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
    scriptureSection: {
        marginTop: 8,
        marginBottom: 16,
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
    quizCard: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 20,
      marginTop: 16,
      borderWidth: 2,
      borderColor: colors.accent + '30',
      shadowColor: colors.accent,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  quizIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  quizBadgeText: {
    fontSize: 10,
    fontFamily: typography.semibold,
    color: colors.surface,
    letterSpacing: 1,
  },
  quizTitle: {
    fontSize: 22,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  quizSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  quizFeatures: {
    gap: 8,
    marginBottom: 16,
  },
  quizFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quizFeatureText: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textPrimary,
  },
  quizFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  },
  quizCTA: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.textSecondary,
    letterSpacing: 0.3,
  },
})
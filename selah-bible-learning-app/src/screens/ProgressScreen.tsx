import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet} from "react-native"
import { typography } from "../theme/typography";
import { colors } from "../theme/colors";
import { useReading } from "../context/ReadingContext";
import Card from "../components/card";
import { act } from "react";

export default function ProgressScreen() {
  const {streak} = useReading()
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Your Journey</Text>
        <Text style={styles.subtitle}>
        Every moment in the Word is meaningful.
      </Text>

      <Card>
        <View style={styles.streakRow}>
         <Ionicons
         name="flame-outline"
         size={22}
         color={colors.primary}
         />
         <Text style={styles.streakValue}>
            {streak} faithful day{streak !== 1 ? "s" : ""}
          </Text>
        </View>
        <Text style={styles.streakDescription}>
          You have been showing up consistently.
        </Text>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>This Week </Text>
        <View style={styles.weekRow}>
         {[...Array(7)].map((_, index) => {
            const active = index < streak && streak > 0;
            return(
              <View
              key={index}
              style={[styles.dayCircle,
                active && styles.dayCircleActive
              ]}
              />
            );
          })}
        </View>
        <Text style={styles.weekHint}>
          One circle for each day spent in Scripture.
        </Text>
      </Card>

      <Card>
        <View style={styles.encouragementRow}>
          <Ionicons name="heart-outline" size={18} color={colors.primary} />
          <Text style={styles.encouragementText}>
            Grace meets you where you are.
          </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:colors.background
  },
  title:{
    fontSize:24,
    fontFamily:typography.semibold,
    color:colors.textPrimary,
    marginBottom:4,
  },
  subtitle:{
    fontSize:14,
    fontFamily:typography.regular,
    color:colors.textSecondary,
    marginBottom:20
  },
  sectionTitle:{
    fontSize:16,
    fontFamily:typography.medium,
    marginBottom:12,
    color:colors.textPrimary
  },
  streakRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:8,
    marginBottom:8
  },
  streakValue:{
    fontSize:18,
    fontFamily:typography.semibold,
    color:colors.textPrimary
  },
  streakDescription:{
    fontSize:14,
    fontFamily:typography.regular,
    color:colors.textSecondary
  },
  weekRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:12
  },
  dayCircle:{
    width:12,
    height:12,
    borderRadius:6,
    opacity:0.3,
    backgroundColor:colors.accent
  },
  dayCircleActive:{
    opacity:1,
    backgroundColor: colors.primary
  },
  weekHint:{
    fontSize:12,
    fontFamily: typography.regular,
    color:colors.textSecondary
  },
  encouragementRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:8
  },
  encouragementText:{
    fontSize:14,
    fontFamily: typography.regular,
    color:colors.textPrimary
  }
})
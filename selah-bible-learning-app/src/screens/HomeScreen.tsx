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
        <Text style={styles.greeting}>Good Morning!</Text>
         {streak === 0 ? (
            <Text>
                A gentle start is a great start beloved
            </Text>
         ) :(
        <View style={styles.streakRow}>
            <Ionicons
            name="flame-outline"
            size={18}
            color={colors.primary}
            />
            <Text style={styles.streakText}>
            Streak: {streak} day{streak !== 1 ? "s" : ""}
            </Text>
        </View>
        )}
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
            onPress={() => navigation.navigate('Read')}/>
            <ActionButton 
            label="Study" 
            iconName="school-outline"
            onPress={() => navigation.navigate('Progress')}/>
            <ActionButton 
            label="Reflect"
            iconName="create-outline" 
            onPress={() => navigation.navigate('Profile')}/>
        </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:colors.background
    },
    greeting:{
        fontSize:24,
        fontFamily:typography.semibold,
        marginBottom:20,
        color:colors.textPrimary
    },
    cardTitle:{
        fontSize:18,
        fontFamily:typography.semibold,
        marginBottom:8,
        color:colors.textPrimary
    },
    cardText:{
        fontSize:14,
        fontFamily:typography.regular,
        color:colors.textSecondary,
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    streakText: {
        fontSize: 14,
        color: colors.primary,
        fontWeight: "500",
    },
    streakRow:{
        flexDirection:"row",
        alignItems:"center",
        gap:6,
        marginBottom:12,
    },
    emptyStreakText:{
        fontSize:14,
        color:colors.textSecondary,
        marginTop:12,
        fontFamily:typography.regular
    }
  }

  )
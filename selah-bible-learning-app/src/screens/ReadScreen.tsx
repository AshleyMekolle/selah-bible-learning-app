import {View, Text, StyleSheet, Pressable} from 'react-native'
import { colors } from '../theme/colors';
import ScriptureCard from '../components/ScriptureCard';
import { useReading } from '../context/ReadingContext';
import { Ionicons } from '@expo/vector-icons';

export default function ReadScreen (){
    const {completedToday, completeReading} = useReading();
    return(
        <View style={styles.container}>
            <ScriptureCard reference="Genesis 1:1–5">
              <Text style={styles.verse}>In the beginning God created the heaven and the earth.</Text>
              <Text style={styles.verse}> And the earth was without form, and void; and darkness was upon the face of the deep...</Text>
              <Text style={styles.verse}> And God said, Let there be light: and there was light</Text>
            </ScriptureCard>

            <View style={styles.statusRow}>
              <Ionicons 
              name={completedToday ? "checkmark-circle" : "time-outline"}
              size={22}
              color={completedToday ? colors.primary : colors.textSecondary}
              />
              <Text style={styles.statusText}> {completedToday ? "Reading completed today" : "Today's reading in progress"}</Text>
            </View>

            <Pressable style={[styles.completeButton, completedToday && styles.completedButton,]} 
            onPress={completeReading}
            disabled={completedToday}>
                <Ionicons
                name={completedToday ? "heart" : "book"}
                size={18}
                color="#FFF"
                />
            <Text style={styles.completeButtonText}>{completedToday ? "Completed" : "Complete Reading"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:colors.background
    },
    verse:{
        fontSize:16,
        lineHeight:24,
        marginBottom:12,
        color:colors.textPrimary
    },
    progressText:{
        fontSize:14,
        color:colors.textSecondary,
        marginBottom:12
    },
    completeButton:{
        padding:16,
        borderRadius:14,
        backgroundColor:colors.primary,
        alignItems:'center',
        opacity:0.5
    },
    completedButton:{
        padding:16,
        borderRadius:14,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:8,
        backgroundColor: colors.primary,
    },
    completeButtonText:{
        padding:16,
        fontWeight:'600',
        color:'#FFF',
    },
    statusRow:{
        flexDirection:"row",
        alignItems:"center",
        gap:8,
        marginVertical:12,
    },
    statusText:{
        fontSize:14,
        color:colors.textSecondary
    }
})
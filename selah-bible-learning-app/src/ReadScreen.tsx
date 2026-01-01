import {View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import { bookMap } from './bookMap';
import { getTodayReading } from './getTodayReading';
import { fetchTodayScripture } from './bibleService';
import { useState, useEffect } from 'react';
import { colors } from './color';
import ScriptureCard from './ScriptureCard';
import { useReading } from './ReadingContext';
import { Ionicons } from '@expo/vector-icons';
import { typography } from './typography';

export default function ReadScreen (){
    const {completedToday, completeReading} = useReading();


    const [verses, setVerses] = useState<any[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const loadScripture = async () => {
    try {
      const data = await fetchTodayScripture();
      setVerses(data.verses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadScripture();
}, []);


if (loading) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}

    return(

        <ScrollView style={styles.container}>
  {verses.map((verse) => (
    <Text key={verse.id} style={styles.verse}>
      <Text style={styles.verseNumber}>{verse.number} </Text>
      {verse.text}
    </Text>
  ))}
</ScrollView>


        
        // <View style={styles.container}>
        //     <ScriptureCard reference="Genesis 1:1–5">
        //       <Text style={styles.verse}>In the beginning God created the heaven and the earth.</Text>
        //       <Text style={styles.verse}> And the earth was without form, and void; and darkness was upon the face of the deep...</Text>
        //       <Text style={styles.verse}> And God said, Let there be light: and there was light</Text>
        //     </ScriptureCard>

        //     <View style={styles.statusRow}>
        //       <Ionicons 
        //       name={completedToday ? "checkmark-circle" : "time-outline"}
        //       size={22}
        //       color={completedToday ? colors.primary : colors.textSecondary}
        //       />
        //       <Text style={styles.statusText}> {completedToday ? "You have spent time in the Word today."
        //        : "Take a moment with today’s Scripture."}</Text>
        //     </View>

        //     <Pressable style={[styles.completeButton, completedToday ? styles.completedButton : {},]} 
        //     onPress={completeReading}
        //     disabled={completedToday}>
        //         <Ionicons
        //         name={completedToday ? "heart" : "book"}
        //         size={18}
        //         color="#FFF"
        //         />
        //     <Text style={styles.completeButtonText}>{completedToday ? "Completed" : "Complete Reading"}</Text>
        //     </Pressable>
        // </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:colors.background
    },
    verse: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 26,
    marginBottom: 12,
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
        fontFamily:typography.regular,
        color:colors.textSecondary
    },
    loading:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
    verseNumber: {
        fontSize: 12,
        fontFamily: typography.medium,
        color: colors.textSecondary,
    },
})
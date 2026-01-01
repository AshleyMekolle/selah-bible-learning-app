import {View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import { bookMap } from '../data/bookMap';
import { getTodayReading } from '../utils/getTodayReading';
import { fetchTodayScripture } from '../services/bibleService';
import { useState, useEffect } from 'react';
import { colors } from '../theme/color';
import ScriptureCard from '../components/ScriptureCard';
import { useReading } from '../context/ReadingContext';
import { Ionicons } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import { mockScripture } from '../mocks/scripture';
import VerseItem from '../components/VerseItem';
import FadeInView from '../components/FadeInView';

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

//         <ScrollView style={styles.container}>
//   {verses.map((verse) => (
//     <Text key={verse.id} style={styles.verse}>
//       <Text style={styles.verseNumber}>{verse.number} </Text>
//       {verse.text}
//     </Text>
//   ))}

//   <View style={styles.statusRow}>
//          <Ionicons 
//              name={completedToday ? "checkmark-circle" : "time-outline"}
//          size={22}
//              color={completedToday ? colors.primary : colors.textSecondary}
//             />
//             <Text style={styles.statusText}> {completedToday ? "You have spent time in the Word today."
//              : "Take a moment with today’s Scripture."}</Text>
//             </View>

//            <Pressable style={[styles.completeButton, completedToday ? styles.completedButton : {},]} 
//            onPress={completeReading}
//           disabled={completedToday}>
//                <Ionicons
//                name={completedToday ? "heart" : "book"}
//                size={18}
//                 color="#FFF"
//                 />
//              <Text style={styles.completeButtonText}>{completedToday ? "Completed" : "Complete Reading"}</Text>
//              </Pressable>
// </ScrollView>


    <View style={styles.container}>
      {/* <ScriptureCard reference={mockScripture.reference}>
        {mockScripture.verses.map((verse) => (
          <Text key={verse.id} style={styles.verse}>
            <Text style={styles.verseNumber}>{verse.number}. </Text>
            {verse.text}
          </Text>
        ))}
      </ScriptureCard> */}

      <ScriptureCard reference={mockScripture.reference}>

      <FadeInView>
  {verses.map((verse) => (
    <VerseItem
      key={verse.id}
      number={verse.number}
      text={verse.text}
    />
  ))}
</FadeInView>
</ScriptureCard>


      <View style={styles.statusRow}>
        <Ionicons
          name={completedToday ? "checkmark-circle" : "time-outline"}
          size={22}
          color={completedToday ? colors.primary : colors.textSecondary}
        />
        <Text style={styles.statusText}>
          {completedToday 
            ? "You have spent time in the Word today."
            : "Take a moment with today's Scripture."
          }
        </Text>
      </View>

      <Pressable 
        style={[styles.completeButton, completedToday && styles.completedButton]} 
        onPress={completeReading}
        disabled={completedToday}
      >
        <Ionicons
          name={completedToday ? "heart" : "book"}
          size={18}
          color="#FFF"
        />
        <Text style={styles.completeButtonText}>
          {completedToday ? "Completed" : "Complete Reading"}
        </Text>
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
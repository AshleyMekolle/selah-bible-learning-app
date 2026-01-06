import {View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import { bookMap } from '../data/bookMap';
import { getDayReading } from '../services/api';
import { DayResponse } from '../navigation/api';
import { useState, useEffect } from 'react';
import { colors } from '../theme/color';
import ScriptureCard from '../components/ScriptureCard';
import { useReading } from '../context/ReadingContext';
import { Ionicons } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import { mockScripture } from '../mocks/scripture';
import VerseItem from '../components/VerseItem';
import FadeInView from '../components/FadeInView';
import ReadingCompletion from '../components/ReadingCompletion';

export default function ReadScreen (){
  const { completedToday, completeReading } = useReading();

  const [verses, setVerses] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [day, setDay] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getDayReading(1); 
        setDay(data.meta.day);
        setVerses(data?.content?.scripture?.verses ?? []);
        setPagination(data?.content?.scripture?.pagination ?? null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);


// useEffect(() => {
//   const load = async () => {
//     try {
//       const data = await getTodayReading();
//       setDay(data.meta.day);
//       setVerses(data.content.scripture.verses);
//       setPagination(data.content.scripture.pagination);
//     } finally {
//       setLoading(false);
//     }
//   };

//   load();
// }, []);


// useEffect(() => {
//   const loadScripture = async () => {
//     try {
//       const data = await fetchTodayScripture();
//       setVerses(data.verses);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   loadScripture();
// }, []);

const loadMore = async () => {
  if (!pagination?.has_more || !day) return;

  const PAGE_SIZE = 10;
  const nextStart = pagination.start + pagination.limit;
  const data = await getDayReading(day, nextStart, PAGE_SIZE);

  setVerses(prev => [...prev, ...data.content.scripture.verses]);
  setPagination(data.content.scripture.pagination);
};


if (loading) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}

    return(
    <View style={styles.container}>
  <ScriptureCard reference={pagination?.reference ?? ""}>

      <FadeInView>
  {verses.map((verse) => (
    <VerseItem
      key={verse.id}
      number={verse.number}
      text={verse.text}
    />
  ))}
</FadeInView>

<Pressable onPress={loadMore} disabled={!pagination?.has_more}>
  <Text style={{ textAlign: "center", marginVertical: 12 }}>
    {pagination?.has_more ? "Load more" : "End of chapter"}
  </Text>
</Pressable>

</ScriptureCard>

<ReadingCompletion
  completed={completedToday}
  onComplete={completeReading}
/>


{/* 
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
      </Pressable> */}
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
import {View, Text, StyleSheet, Pressable, ActivityIndicator, ScrollView} from 'react-native'
import { getDayReading } from '../services/api';
import { useState, useEffect } from 'react';
import { colors } from '../theme/color';
import ScriptureCard from '../components/ScriptureCard';
import { useReading } from '../context/ReadingContext';
import { Ionicons } from '@expo/vector-icons';
import { typography } from '../theme/typography';
import VerseItem from '../components/VerseItem';
import FadeInView from '../components/FadeInView';
import ReadingCompletion from '../components/ReadingCompletion';

export default function ReadScreen (){
  const { completedToday, completeReading } = useReading();

  const [verses, setVerses] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [day, setDay] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadReading = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDayReading(1); 
      setDay(data.meta.day);
      setVerses(data.content.scripture.verses);
      setPagination(data.content.scripture.pagination);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReading();
  }, []);

  const loadMore = async () => {
    if (!pagination?.has_more || !day) return;
    const nextStart = pagination.start + pagination.limit;
    const data = await getDayReading(day, nextStart, pagination.limit);
    setVerses(prev => [...prev, ...data.content.scripture.verses]);
    setPagination(data.content.scripture.pagination);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading today's reading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ScriptureCard reference="Error">
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle-outline" size={48} color={colors.textSecondary} />
            <Text style={styles.errorText}>{error}</Text>
            <Pressable style={styles.retryButton} onPress={loadReading}>
              <Text style={styles.retryText}>Try Again</Text>
            </Pressable>
          </View>
        </ScriptureCard>
      </View>
    );
  }

  if (verses.length === 0) {
    return (
      <View style={styles.container}>
        <ScriptureCard reference="No Scripture Available">
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={48} color={colors.textSecondary} />
            <Text style={styles.emptyText}>No verses found</Text>
            <Pressable style={styles.retryButton} onPress={loadReading}>
              <Text style={styles.retryText}>Retry</Text>
            </Pressable>
          </View>
        </ScriptureCard>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScriptureCard reference={pagination?.reference || "Today's Reading"}>
        <ScrollView>
          <FadeInView>
            {verses.map((verse) => (
              <VerseItem
                key={verse.id}
                number={verse.number}
                text={verse.text}
              />
            ))}
          </FadeInView>
        </ScrollView>
        
        <Pressable onPress={loadMore} disabled={!pagination?.has_more} style={styles.loadMoreButton}>
          <Text style={[styles.loadMoreText, !pagination?.has_more && styles.endText]}>
            {pagination?.has_more ? "Load more" : "End of chapter"}
          </Text>
        </Pressable>
      </ScriptureCard>

      <ReadingCompletion completed={completedToday} onComplete={completeReading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: typography.regular
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  errorText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: typography.medium,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontFamily: typography.medium,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: '#FFFFFF',
    fontFamily: typography.medium,
    fontSize: 14,
  },
  loadMoreButton: {
    paddingVertical: 16,
  },
  loadMoreText: {
    textAlign: "center",
    color: colors.primary,
    fontFamily: typography.medium,
    fontSize: 14,
  },
  endText: {
    color: colors.textSecondary,
  },
});
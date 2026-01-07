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

  const getReadingProgress = () => {
    if (!pagination) return 0;
    const currentVerse = pagination.start + verses.length;
    const totalVerses = pagination.total || currentVerse;
    return Math.round((currentVerse / totalVerses) * 100);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <View style={styles.loadingIconContainer}>
          <Ionicons name="book" size={48} color={colors.primary} />
        </View>
        <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
        <Text style={styles.loadingTitle}>Preparing Scripture</Text>
        <Text style={styles.loadingText}>Opening today's reading for you...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ScriptureCard reference="Error">
          <View style={styles.errorContainer}>
            <View style={styles.errorIconContainer}>
              <Ionicons name="alert-circle" size={56} color={colors.primary} />
            </View>
            <Text style={styles.errorTitle}>Unable to Load</Text>
            <Text style={styles.errorText}>{error}</Text>
            <Pressable style={styles.retryButton} onPress={loadReading}>
              <Ionicons name="refresh" size={18} color="#FFFFFF" />
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
            <View style={styles.emptyIconContainer}>
              <Ionicons name="book-outline" size={56} color={colors.textSecondary} />
            </View>
            <Text style={styles.emptyTitle}>No Verses Found</Text>
            <Text style={styles.emptyText}>We couldn't find any verses for today</Text>
            <Pressable style={styles.retryButton} onPress={loadReading}>
              <Ionicons name="refresh" size={18} color="#FFFFFF" />
              <Text style={styles.retryText}>Retry</Text>
            </Pressable>
          </View>
        </ScriptureCard>
      </View>
    );
  }

  const progress = getReadingProgress();

  return (
    <View style={styles.container}>
      <View style={styles.progressHeader}>
        <View style={styles.progressInfo}>
          <Ionicons name="book-outline" size={16} color={colors.primary} />
          <Text style={styles.progressText}>
            Day {day} • {verses.length} verses read
          </Text>
        </View>
        {progress < 100 && (
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
        )}
      </View>

      <ScriptureCard reference={pagination?.reference || "Today's Reading"}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FadeInView>
            <View style={styles.readingIntro}>
              <Text style={styles.readingIntroText}>
                Take your time. Let each word settle.
              </Text>
            </View>

            {verses.map((verse) => (
              <VerseItem
                key={verse.id}
                number={verse.number}
                text={verse.text}
              />
            ))}

            {pagination?.has_more ? (
              <Pressable onPress={loadMore} style={styles.loadMoreContainer}>
                <View style={styles.loadMoreDivider} />
                <View style={styles.loadMoreButton}>
                  <Ionicons name="chevron-down-circle-outline" size={20} color={colors.primary} />
                  <Text style={styles.loadMoreText}>Continue Reading</Text>
                </View>
                <View style={styles.loadMoreDivider} />
              </Pressable>
            ) : (
              <View style={styles.endContainer}>
                <View style={styles.endDivider} />
                <View style={styles.endBadge}>
                  <Ionicons name="checkmark-circle" size={18} color={colors.accent} />
                  <Text style={styles.endText}>Chapter Complete</Text>
                </View>
                <Text style={styles.endSubtext}>
                  You've finished today's reading
                </Text>
              </View>
            )}
          </FadeInView>
        </ScrollView>
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
    backgroundColor: colors.background,
    padding: 40,
  },
  loadingIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  spinner: {
    marginVertical: 20,
  },
  loadingTitle: {
    fontSize: 20,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  loadingText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: typography.regular,
    textAlign: 'center',
  },

  progressHeader: {
    marginBottom: 16,
  },
  progressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  progressText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
    letterSpacing: 0.2,
  },
  progressBarContainer: {
    height: 3,
    backgroundColor: colors.textSecondary + '20',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },

  readingIntro: {
    backgroundColor: colors.accent + '10',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  readingIntroText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 20,
  },

  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  errorIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary + '10',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  errorText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: typography.regular,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyIconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.textSecondary + '10',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: typography.regular,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },

  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  retryText: {
    color: '#FFFFFF',
    fontFamily: typography.semibold,
    fontSize: 14,
    letterSpacing: 0.3,
  },

  loadMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
    gap: 16,
  },
  loadMoreDivider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textSecondary + '20',
  },
  loadMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loadMoreText: {
    color: colors.primary,
    fontFamily: typography.semibold,
    fontSize: 14,
    letterSpacing: 0.2,
  },

  endContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  endDivider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.textSecondary + '20',
    marginBottom: 20,
  },
  endBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.accent + '15',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
  },
  endText: {
    color: colors.accent,
    fontFamily: typography.semibold,
    fontSize: 14,
    letterSpacing: 0.3,
  },
  endSubtext: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getAllReflections, Reflection } from "../utils/ReflectionStorage";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import Card from "../components/Card";

export default function ReflectionHistoryScreen() {
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getAllReflections();
      const sorted = data.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setReflections(sorted);
    };

    load();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const toggleExpand = (date: string) => {
    setExpandedId(expandedId === date ? null : date);
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.header}>
        <Text style={styles.title}>Your Reflections</Text>
        <Text style={styles.subtitle}>
          Moments you paused to listen and respond.
        </Text>
      </View>
      {reflections.length > 0 && (
        <View style={styles.countBadge}>
          <Ionicons name="book" size={16} color={colors.primary} />
          <Text style={styles.countText}>
            {reflections.length} reflection{reflections.length !== 1 ? 's' : ''} recorded
          </Text>
        </View>
      )}

      {reflections.length === 0 && (
        <View style={styles.emptyState}>
          <View style={styles.emptyIconContainer}>
            <Ionicons
              name="journal-outline"
              size={48}
              color={colors.textSecondary}
            />
          </View>
          <Text style={styles.emptyTitle}>No reflections yet</Text>
          <Text style={styles.emptyText}>
            Your reflections will appear here as you write them.
          </Text>
          <View style={styles.emptyHint}>
            <Ionicons name="bulb-outline" size={16} color={colors.primary} />
            <Text style={styles.emptyHintText}>
              Start reflecting on today's reading
            </Text>
          </View>
        </View>
      )}
      {reflections.map((item, index) => {
        const isExpanded = expandedId === item.date;
        const wordCount = getWordCount(item.text);
        
        return (
          <TouchableOpacity
            key={item.date}
            activeOpacity={0.7}
            onPress={() => toggleExpand(item.date)}
          >
          <View style={styles.reflectionCard}>
            <Card >
              <View style={styles.cardHeader}>
                <View style={styles.dateContainer}>
                  <Ionicons 
                    name="calendar-outline" 
                    size={14} 
                    color={colors.primary} 
                  />
                  <Text style={styles.date}>
                    {formatDate(item.date)}
                  </Text>
                </View>
                <View style={styles.cardMeta}>
                  <Text style={styles.wordCount}>
                    {wordCount} word{wordCount !== 1 ? 's' : ''}
                  </Text>
                  <Ionicons 
                    name={isExpanded ? "chevron-up" : "chevron-down"} 
                    size={16} 
                    color={colors.textSecondary} 
                  />
                </View>
              </View>

              <Text
                style={styles.preview}
                numberOfLines={isExpanded ? undefined : 3}
              >
                {item.text}
              </Text>

              {!isExpanded && item.text.length > 150 && (
                <Text style={styles.readMore}>Tap to read more</Text>
              )}

              {index < reflections.length - 1 && (
                <View style={styles.cardDivider} />
              )}
            </Card>
             </View>
          </TouchableOpacity>
        );
      })}

      {reflections.length > 0 && (
        <View style={styles.footer}>
          <Ionicons name="heart" size={16} color={colors.accent} />
          <Text style={styles.footerText}>
            Keep building your spiritual journal
          </Text>
        </View>
      )}
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
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.semibold,
    marginBottom: 4,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 22,
  },

  countBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.primary + '15',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
    marginBottom: 20,
  },
  countText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.primary,
  },

  emptyState: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
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
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  emptyHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.accent + '15',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  emptyHintText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },

  reflectionCard: {
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    fontSize: 13,
    fontFamily: typography.semibold,
    color: colors.primary,
    letterSpacing: 0.2,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wordCount: {
    fontSize: 12,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
  preview: {
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 24,
  },
  readMore: {
    fontSize: 12,
    fontFamily: typography.medium,
    color: colors.primary,
    marginTop: 8,
  },
  cardDivider: {
    height: 1,
    backgroundColor: colors.textSecondary + '15',
    marginTop: 16,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
})
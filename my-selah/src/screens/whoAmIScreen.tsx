import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Animated, Modal } from "react-native";
import { useEffect, useState, useRef } from "react";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import { getRandomWhoAmI, CharacterCategory, CharacterSeason } from "../services/whoAmIService";
import { useXP } from "../context/XPContext";
import { Ionicons } from "@expo/vector-icons";

const POINTS = [100, 75, 50, 25];

const CELEBRATION_MESSAGES = [
  "Nailed it!",
  "Biblical genius!",
  "Holy wisdom!",
  "Outstanding!",
  "Scripture master!"
];

const ENCOURAGEMENT_MESSAGES = [
  "So close! Try again",
  "Almost there!",
  "Keep learning!",
  "Good effort!",
  "Don't give up!"
];

export default function WhoAmIScreen() {
  const { addXP } = useXP();
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const celebrateAnim = useRef(new Animated.Value(0)).current;
  const confettiAnim = useRef(new Animated.Value(0)).current;

  const [character, setCharacter] = useState<any>(null);
  const [revealed, setRevealed] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<null | {
    correct: boolean;
    points: number;
  }>(null);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<CharacterCategory | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<CharacterSeason | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState("");

  useEffect(() => {
    loadNewGame();
  }, []);

  const loadNewGame = () => {
    const newCharacter = getRandomWhoAmI(selectedCategory || undefined, selectedSeason || undefined);
    setCharacter(newCharacter);
    setRevealed(0);
    setGuess("");
    setResult(null);
    confettiAnim.setValue(0);
    celebrateAnim.setValue(0);
  };

  const submitGuess = () => {
    if (!character || result) return;

    const isCorrect =
      guess.trim().toLowerCase() === character.name.toLowerCase();

    if (!isCorrect) {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();

      setStreak(0);
      const message = ENCOURAGEMENT_MESSAGES[Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length)];
      setCelebrationMessage(message);
    } else {
      Animated.parallel([
        Animated.spring(celebrateAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.timing(confettiAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();

      setStreak(prev => prev + 1);
      const message = CELEBRATION_MESSAGES[Math.floor(Math.random() * CELEBRATION_MESSAGES.length)];
      setCelebrationMessage(message);
    }

    const points = isCorrect ? POINTS[revealed] : 0;
    const xp = Math.floor(points / 10);

    if (xp > 0) {
      addXP(xp);
      setTotalPoints(prev => prev + points);
    }

    setResult({ correct: isCorrect, points });
    setGamesPlayed(prev => prev + 1);
  };

  const revealNextClue = () => {
    if (revealed < character.clues.length - 1) {
      setRevealed(prev => prev + 1);
    }
  };

  const playAgain = () => {
    celebrateAnim.setValue(0);
    loadNewGame();
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSeason(null);
    loadNewGame();
  };

  const categories: CharacterCategory[] = ["Kings", "Prophets", "Women", "Apostles", "Judges"];
  const seasons: CharacterSeason[] = ["Faith", "Leadership", "Redemption", "Courage"];

  const scaleInterpolate = celebrateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const confettiOpacity = confettiAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  if (!character) {
    return (
      <View style={styles.loading}>
        <Ionicons name="hourglass-outline" size={48} color={colors.primary} />
        <Text style={styles.loadingText}>Loading game...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="sparkles" size={32} color={colors.accent} />
          </View>
          <View>
            <Text style={styles.title}>Who Am I?</Text>
            <Text style={styles.subtitle}>Biblical Mystery Challenge</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBadge}>
          <Ionicons name="game-controller" size={16} color="#8B5CF6" />
          <Text style={styles.statText}>{gamesPlayed} played</Text>
        </View>
        <View style={styles.statBadge}>
          <Ionicons name="trophy" size={16} color="#F59E0B" />
          <Text style={styles.statText}>{totalPoints} pts</Text>
        </View>
        {streak > 0 && (
          <View style={[styles.statBadge, styles.streakBadge]}>
            <Ionicons name="flame" size={16} color="#EF4444" />
            <Text style={styles.streakText}>{streak} streak!</Text>
          </View>
        )}
        <Pressable 
          style={styles.filterButton}
          onPress={() => setShowFilterModal(true)}
        >
          <Ionicons name="options" size={16} color={colors.primary} />
        </Pressable>
      </View>

      {(selectedCategory || selectedSeason) && (
        <View style={styles.activeFilters}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterTags}>
              {selectedCategory && (
                <View style={styles.filterTag}>
                  <Ionicons name="person" size={12} color={colors.primary} />
                  <Text style={styles.filterTagText}>{selectedCategory}</Text>
                  <Pressable onPress={() => setSelectedCategory(null)}>
                    <Ionicons name="close-circle" size={16} color={colors.primary} />
                  </Pressable>
                </View>
              )}
              {selectedSeason && (
                <View style={styles.filterTag}>
                  <Ionicons name="heart" size={12} color={colors.accent} />
                  <Text style={styles.filterTagText}>{selectedSeason}</Text>
                  <Pressable onPress={() => setSelectedSeason(null)}>
                    <Ionicons name="close-circle" size={16} color={colors.accent} />
                  </Pressable>
                </View>
              )}
            </View>
          </ScrollView>
          <Pressable onPress={clearFilters} style={styles.clearFiltersButton}>
            <Ionicons name="refresh" size={16} color={colors.textSecondary} />
          </Pressable>
        </View>
      )}

      <View style={styles.cluesCard}>
        <View style={styles.cluesHeader}>
          <View style={styles.cluesHeaderLeft}>
            <Ionicons name="bulb" size={22} color="#F59E0B" />
            <Text style={styles.cluesTitle}>Mystery Clues</Text>
          </View>
          <View style={styles.cluesHeaderRight}>
            <View style={styles.characterInfoBadge}>
              <Text style={styles.characterInfoText}>
                {character.category} • {character.season}
              </Text>
            </View>
            <View style={styles.cluesCount}>
              <Text style={styles.cluesCountText}>
                {revealed + 1}/{character.clues.length}
              </Text>
            </View>
          </View>
        </View>

        {character.clues.slice(0, revealed + 1).map((clue: string, index: number) => (
          <View key={index} style={styles.clueRow}>
            <View style={styles.clueNumber}>
              <Ionicons name="key" size={14} color={colors.accent} />
            </View>
            <Text style={styles.clueText}>{clue}</Text>
          </View>
        ))}

        {revealed < character.clues.length - 1 && (
          <View style={styles.lockedClueHint}>
            <Ionicons name="lock-closed" size={14} color={colors.textSecondary} />
            <Text style={styles.lockedClueText}>
              {character.clues.length - revealed - 1} more clue{character.clues.length - revealed - 1 > 1 ? 's' : ''} locked
            </Text>
          </View>
        )}
      </View>

      {!result && (
        <>
          <Animated.View style={[
            styles.inputCard,
            { transform: [{ translateX: shakeAnim }] }
          ]}>
            <View style={styles.inputHeader}>
              <Ionicons name="create" size={18} color={colors.primary} />
              <Text style={styles.inputLabel}>Make Your Guess</Text>
              <View style={styles.pointsIndicator}>
                <Ionicons name="star" size={12} color="#F59E0B" />
                <Text style={styles.pointsIndicatorText}>{POINTS[revealed]} pts</Text>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Who could it be...?"
              placeholderTextColor={colors.textSecondary + '80'}
              value={guess}
              onChangeText={setGuess}
              autoCapitalize="words"
            />
          </Animated.View>

          <Pressable 
            style={[styles.primaryBtn, !guess.trim() && styles.btnDisabled]} 
            onPress={submitGuess}
            disabled={!guess.trim()}
          >
            <Ionicons name="flash" size={22} color="#FFF" />
            <Text style={styles.primaryText}>Submit Answer</Text>
          </Pressable>

          {revealed < character.clues.length - 1 && (
            <Pressable style={styles.secondaryBtn} onPress={revealNextClue}>
              <Ionicons name="eye" size={20} color={colors.accent} />
              <Text style={styles.secondaryText}>
                Reveal Clue ({POINTS[revealed]} → {POINTS[revealed + 1]} pts)
              </Text>
              <Ionicons name="arrow-down" size={14} color={colors.textSecondary} />
            </Pressable>
          )}
        </>
      )}

      {result && (
        <Animated.View style={[
          styles.resultCard,
          result.correct ? styles.resultSuccess : styles.resultError,
          { transform: [{ scale: scaleInterpolate }] }
        ]}>
          {result.correct && (
            <Animated.View style={[styles.confetti, { opacity: confettiOpacity }]}>
              <Ionicons name="sparkles" size={32} color="#F59E0B" />
              <Ionicons name="star" size={32} color="#8B5CF6" />
              <Ionicons name="trophy" size={32} color="#10B981" />
              <Ionicons name="heart" size={32} color="#EC4899" />
            </Animated.View>
          )}

          <View style={styles.resultIcon}>
            <Ionicons 
              name={result.correct ? "checkmark-circle" : "close-circle"} 
              size={72} 
              color={result.correct ? "#10B981" : "#EF4444"} 
            />
          </View>
          
          <Text style={styles.resultTitle}>{celebrationMessage}</Text>
          
          {result.correct ? (
            <View style={styles.pointsDisplay}>
              <Text style={styles.pointsValue}>+{result.points}</Text>
              <Text style={styles.pointsLabel}>points earned</Text>
              {streak > 1 && (
                <View style={styles.streakBonus}>
                  <Ionicons name="flame" size={16} color="#EF4444" />
                  <Text style={styles.streakBonusText}>{streak} win streak!</Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.answerReveal}>
              <Text style={styles.answerLabel}>The answer was:</Text>
              <Text style={styles.answerText}>{character.name}</Text>
            </View>
          )}

          <View style={styles.characterInfo}>
            <View style={styles.characterInfoHeader}>
              <Ionicons name="book" size={18} color={colors.primary} />
              <Text style={styles.characterInfoTitle}>About {character.name}</Text>
            </View>
            <Text style={styles.characterDescription}>{character.description}</Text>
          </View>

          <Pressable style={styles.playAgainBtn} onPress={playAgain}>
            <Ionicons name="play-circle" size={24} color={colors.primary} />
            <Text style={styles.playAgainText}>Next Challenge</Text>
          </Pressable>
        </Animated.View>
      )}

      <Modal
        transparent
        visible={showFilterModal}
        animationType="fade"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleInterpolate }] }]}>
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleContainer}>
                <View style={styles.modalIconContainer}>
                  <Ionicons name="funnel" size={24} color={colors.primary} />
                </View>
                <View>
                  <Text style={styles.modalTitle}>Filter Challenge</Text>
                  <Text style={styles.modalSubtitle}>Select preferences</Text>
                </View>
              </View>
              <Pressable 
                style={styles.modalCloseButton}
                onPress={() => setShowFilterModal(false)}
              >
                <Ionicons name="close" size={24} color={colors.textSecondary} />
              </Pressable>
            </View>

            <View style={styles.filterSection}>
              <View style={styles.filterSectionHeader}>
                <Ionicons name="people" size={18} color={colors.primary} />
                <Text style={styles.filterSectionTitle}>Category</Text>
              </View>
              <View style={styles.filterOptions}>
                {categories.map((category) => (
                  <Pressable
                    key={category}
                    style={[
                      styles.filterOption,
                      selectedCategory === category && styles.filterOptionSelected
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text style={[
                      styles.filterOptionText,
                      selectedCategory === category && styles.filterOptionTextSelected
                    ]}>
                      {category}
                    </Text>
                    {selectedCategory === category && (
                      <Ionicons name="checkmark" size={18} color={colors.primary} />
                    )}
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.filterSection}>
              <View style={styles.filterSectionHeader}>
                <Ionicons name="heart" size={18} color={colors.accent} />
                <Text style={styles.filterSectionTitle}>Theme</Text>
              </View>
              <View style={styles.filterOptions}>
                {seasons.map((season) => (
                  <Pressable
                    key={season}
                    style={[
                      styles.filterOption,
                      selectedSeason === season && styles.filterOptionSelected
                    ]}
                    onPress={() => setSelectedSeason(season)}
                  >
                    <Text style={[
                      styles.filterOptionText,
                      selectedSeason === season && styles.filterOptionTextSelected
                    ]}>
                      {season}
                    </Text>
                    {selectedSeason === season && (
                      <Ionicons name="checkmark" size={18} color={colors.accent} />
                    )}
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.modalDivider} />

            <View style={styles.modalActions}>
              <Pressable 
                style={styles.modalClearButton}
                onPress={clearFilters}
              >
                <Ionicons name="refresh" size={18} color={colors.textSecondary} />
                <Text style={styles.modalClearText}>Reset All</Text>
              </Pressable>
              <Pressable 
                style={styles.modalApplyButton}
                onPress={() => {
                  loadNewGame();
                  setShowFilterModal(false);
                }}
              >
                <Text style={styles.modalApplyText}>Apply Filters</Text>
                <Ionicons name="arrow-forward" size={18} color="#FFF" />
              </Pressable>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
  header: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent + '25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.accent,
    letterSpacing: 0.5,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  streakBadge: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  statText: {
    fontSize: 13,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
  streakText: {
    fontSize: 13,
    fontFamily: typography.semibold,
    color: '#EF4444',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  activeFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  filterTags: {
    flexDirection: 'row',
    gap: 8,
  },
  filterTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.primary + '30',
  },
  filterTagText: {
    fontSize: 12,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
  clearFiltersButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cluesCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 22,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.accent + '20',
  },
  cluesHeader: {
    marginBottom: 18,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.textSecondary + '15',
  },
  cluesHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  cluesTitle: {
    fontSize: 18,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  cluesHeaderRight: {
    flexDirection: 'row',
    gap: 8,
  },
  characterInfoBadge: {
    backgroundColor: colors.accent + '12',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.accent + '30',
  },
  characterInfoText: {
    fontSize: 11,
    fontFamily: typography.semibold,
    color: colors.accent,
    letterSpacing: 0.8,
  },
  cluesCount: {
    backgroundColor: colors.primary + '15',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.primary + '30',
  },
  cluesCountText: {
    fontSize: 12,
    fontFamily: typography.semibold,
    color: colors.primary,
  },
  clueRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 14,
    alignItems: 'flex-start',
  },
  clueNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.accent + '25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clueText: {
    flex: 1,
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 24,
    paddingTop: 6,
  },
  lockedClueHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.textSecondary + '10',
  },
  lockedClueText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  inputCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.primary + '20',
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  inputLabel: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: 0.2,
  },
  pointsIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pointsIndicatorText: {
    fontSize: 12,
    fontFamily: typography.semibold,
    color: '#F59E0B',
  },
  input: {
    fontSize: 17,
    fontFamily: typography.medium,
    color: colors.textPrimary,
    padding: 0,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 18,
    marginBottom: 14,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  btnDisabled: {
    opacity: 0.4,
  },
  primaryText: {
    color: '#FFF',
    fontSize: 17,
    fontFamily: typography.semibold,
    letterSpacing: 0.5,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.accent + '30',
  },
  secondaryText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontFamily: typography.semibold,
  },
  resultCard: {
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  resultSuccess: {
    backgroundColor: '#D1FAE5',
    borderWidth: 3,
    borderColor: '#10B981',
  },
  resultError: {
    backgroundColor: '#FEE2E2',
    borderWidth: 3,
    borderColor: '#EF4444',
  },
  confetti: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  resultIcon: {
    marginBottom: 18,
  },
  resultTitle: {
    fontSize: 28,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 20,
    letterSpacing: -0.8,
  },
  pointsDisplay: {
    alignItems: 'center',
    marginBottom: 24,
  },
  pointsValue: {
    fontSize: 56,
    fontFamily: typography.semibold,
    color: '#10B981',
    letterSpacing: -2,
  },
  pointsLabel: {
    fontSize: 15,
    fontFamily: typography.medium,
    color: colors.textSecondary,
    marginTop: 4,
  },
  streakBonus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  streakBonusText: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: '#EF4444',
  },
  answerReveal: {
    alignItems: 'center',
    marginBottom: 24,
  },
  answerLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  answerText: {
    fontSize: 28,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.8,
  },
  characterInfo: {
    width: '100%',
    backgroundColor: colors.surface,
    padding: 18,
    borderRadius: 16,
    marginBottom: 24,
  },
  characterInfoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  characterInfoTitle: {
    fontSize: 15,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
  characterDescription: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 22,
  },
  playAgainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.surface,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  playAgainText: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.primary,
    letterSpacing: 0.3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    width: '100%',
    maxWidth: 400,
    padding: 0,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary + '15',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  modalIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  modalSubtitle: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    letterSpacing: 0.3,
  },
  modalCloseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterSection: {
    padding: 24,
    paddingBottom: 20,
  },
  filterSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 15,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },
  filterOptions: {
    gap: 10,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.surface,
  },
  filterOptionSelected: {
    backgroundColor: colors.primary + '10',
    borderColor: colors.primary + '30',
  },
  filterOptionText: {
    fontSize: 15,
    fontFamily: typography.medium,
    color: colors.textPrimary,
  },
  filterOptionTextSelected: {
    color: colors.primary,
    fontFamily: typography.semibold,
  },
  modalDivider: {
    height: 2,
    backgroundColor: colors.primary + '15',
    marginHorizontal: 24,
  },
  modalActions: {
    flexDirection: 'row',
    padding: 24,
    paddingTop: 20,
    gap: 12,
  },
  modalClearButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.background,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.surface,
  },
  modalClearText: {
    fontSize: 15,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  modalApplyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
  },
  modalApplyText: {
    fontSize: 15,
    fontFamily: typography.semibold,
    color: '#FFF',
  },
});
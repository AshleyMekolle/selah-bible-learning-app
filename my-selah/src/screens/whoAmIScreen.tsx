import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, Animated } from "react-native";
import { useEffect, useState, useRef } from "react";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import { getRandomWhoAmI } from "../services/whoAmIService";
import { useXP } from "../context/XPContext";
import { Ionicons } from "@expo/vector-icons";

const POINTS = [100, 75, 50, 25];

export default function WhoAmIScreen() {
  const { addXP } = useXP();
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const [character, setCharacter] = useState<any>(null);
  const [revealed, setRevealed] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<null | {
    correct: boolean;
    points: number;
  }>(null);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  useEffect(() => {
    loadNewGame();
  }, []);

  const loadNewGame = () => {
    const newCharacter = getRandomWhoAmI();
    setCharacter(newCharacter);
    setRevealed(0);
    setGuess("");
    setResult(null);
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
    }

    const points = isCorrect ? POINTS[revealed] : 0;
    const xp = Math.floor(points / 10);

    if (xp > 0) {
      addXP(xp);
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
    loadNewGame();
  };

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
            <Ionicons name="help-circle" size={32} color={colors.accent} />
          </View>
          <Text style={styles.title}>Who Am I?</Text>
        </View>
        <Text style={styles.subtitle}>Guess the Bible character from the clues</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBadge}>
          <Ionicons name="trophy" size={16} color={colors.accent} />
          <Text style={styles.statText}>Games: {gamesPlayed}</Text>
        </View>
        <View style={styles.statBadge}>
          <Ionicons name="star" size={16} color={colors.primary} />
          <Text style={styles.statText}>Max: {POINTS[revealed]} pts</Text>
        </View>
      </View>

      <View style={styles.cluesCard}>
        <View style={styles.cluesHeader}>
          <Ionicons name="bulb" size={20} color={colors.primary} />
          <Text style={styles.cluesTitle}>Clues</Text>
          <View style={styles.cluesCount}>
            <Text style={styles.cluesCountText}>
              {revealed + 1}/{character.clues.length}
            </Text>
          </View>
        </View>

        {character.clues.slice(0, revealed + 1).map((clue: string, index: number) => (
          <View key={index} style={styles.clueRow}>
            <View style={styles.clueNumber}>
              <Text style={styles.clueNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.clueText}>{clue}</Text>
          </View>
        ))}
      </View>

      {!result && (
        <>
          <Animated.View style={[
            styles.inputCard,
            { transform: [{ translateX: shakeAnim }] }
          ]}>
            <View style={styles.inputHeader}>
              <Ionicons name="pencil" size={16} color={colors.textSecondary} />
              <Text style={styles.inputLabel}>Your Guess</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter character name..."
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
            <Ionicons name="checkmark-circle" size={20} color="#FFF" />
            <Text style={styles.primaryText}>Submit Answer</Text>
          </Pressable>

          {revealed < character.clues.length - 1 && (
            <Pressable style={styles.secondaryBtn} onPress={revealNextClue}>
              <Ionicons name="eye-outline" size={18} color={colors.textSecondary} />
              <Text style={styles.secondaryText}>
                Reveal Next Clue (-{POINTS[revealed] - POINTS[revealed + 1]} pts)
              </Text>
            </Pressable>
          )}
        </>
      )}

      {result && (
        <View style={[
          styles.resultCard,
          result.correct ? styles.resultSuccess : styles.resultError
        ]}>
          <View style={styles.resultIcon}>
            <Ionicons 
              name={result.correct ? "checkmark-circle" : "close-circle"} 
              size={56} 
              color={result.correct ? colors.primary : "#FF6B6B"} 
            />
          </View>
          
          <Text style={styles.resultTitle}>
            {result.correct ? "Correct!" : "Not Quite!"}
          </Text>
          
          {result.correct ? (
            <View style={styles.pointsDisplay}>
              <Text style={styles.pointsValue}>+{result.points}</Text>
              <Text style={styles.pointsLabel}>points earned</Text>
            </View>
          ) : (
            <View style={styles.answerReveal}>
              <Text style={styles.answerLabel}>The answer was:</Text>
              <Text style={styles.answerText}>{character.name}</Text>
            </View>
          )}

          <View style={styles.characterInfo}>
            <Ionicons name="information-circle-outline" size={18} color={colors.textSecondary} />
            <Text style={styles.characterDescription}>{character.description}</Text>
          </View>

          <Pressable style={styles.playAgainBtn} onPress={playAgain}>
            <Ionicons name="refresh" size={20} color={colors.primary} />
            <Text style={styles.playAgainText}>Play Again</Text>
          </Pressable>
        </View>
      )}
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
    gap: 12,
    marginBottom: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.accent + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    marginLeft: 60,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  statText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textPrimary,
  },
  cluesCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  cluesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary + '15',
  },
  cluesTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
  cluesCount: {
    backgroundColor: colors.primary + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cluesCountText: {
    fontSize: 12,
    fontFamily: typography.semibold,
    color: colors.primary,
  },
  clueRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  clueNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.accent + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clueNumberText: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.accent,
  },
  clueText: {
    flex: 1,
    fontSize: 15,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 22,
    paddingTop: 3,
  },
  inputCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  input: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    padding: 0,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  primaryText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: typography.semibold,
    letterSpacing: 0.3,
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
  },
  secondaryText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontFamily: typography.medium,
  },
  resultCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  resultSuccess: {
    backgroundColor: colors.primary + '08',
    borderWidth: 2,
    borderColor: colors.primary + '30',
  },
  resultError: {
    backgroundColor: '#FF6B6B' + '08',
    borderWidth: 2,
    borderColor: '#FF6B6B' + '30',
  },
  resultIcon: {
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 24,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  pointsDisplay: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsValue: {
    fontSize: 40,
    fontFamily: typography.semibold,
    color: colors.primary,
    letterSpacing: -1,
  },
  pointsLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    marginTop: 4,
  },
  answerReveal: {
    alignItems: 'center',
    marginBottom: 20,
  },
  answerLabel: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 24,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  characterInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  characterDescription: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    lineHeight: 20,
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
});
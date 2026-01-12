import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import { getTodayWhoAmI } from "../services/whoAmIService";
import { useXP } from "../context/XPContext";

const STORAGE_KEYS = {
  date: "@who_am_i_date",
  completed: "@who_am_i_completed",
};

const POINTS = [100, 75, 50, 25];

export default function WhoAmIScreen() {
  const character = getTodayWhoAmI();
  const { addXP } = useXP();

  const [revealed, setRevealed] = useState(0);
  const [guess, setGuess] = useState("");
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<null | {
    correct: boolean;
    points: number;
  }>(null);

  useEffect(() => {
    checkCompletion();
  }, []);

  const checkCompletion = async () => {
    const storedDate = await AsyncStorage.getItem(STORAGE_KEYS.date);
    const today = new Date().toISOString().split("T")[0];

    if (storedDate === today) {
      setCompleted(true);
    }
  };

  const submitGuess = async () => {
    if (completed) return;

    const isCorrect =
      guess.trim().toLowerCase() === character.name.toLowerCase();

    const points = isCorrect ? POINTS[revealed] : 0;
    const xp = Math.floor(points / 10);

    if (xp > 0) {
      addXP(xp);
    }

    setResult({ correct: isCorrect, points });
    setCompleted(true);

    const today = new Date().toISOString().split("T")[0];
    await AsyncStorage.setItem(STORAGE_KEYS.date, today);
    await AsyncStorage.setItem(STORAGE_KEYS.completed, "true");
  };

  const revealNextClue = () => {
    if (revealed < character.clues.length - 1) {
      setRevealed(prev => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who Am I?</Text>

      <View style={styles.card}>
        {character.clues.slice(0, revealed + 1).map((clue, index) => (
          <Text key={index} style={styles.clue}>
            {index + 1}. {clue}
          </Text>
        ))}
      </View>

      {!completed && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Your guess..."
            value={guess}
            onChangeText={setGuess}
          />

          <Pressable style={styles.primaryBtn} onPress={submitGuess}>
            <Text style={styles.primaryText}>Submit Guess</Text>
          </Pressable>

          {revealed < character.clues.length - 1 && (
            <Pressable style={styles.secondaryBtn} onPress={revealNextClue}>
              <Text style={styles.secondaryText}>Reveal another clue</Text>
            </Pressable>
          )}
        </>
      )}

      {result && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {result.correct
              ? `Correct! +${result.points} points`
              : `Wrong answer. The correct answer was ${character.name}`}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontFamily: typography.bold,
    marginBottom: 16,
    color: colors.textPrimary,
  },
  card: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  clue: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textPrimary,
    marginBottom: 10,
    lineHeight: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    fontFamily: typography.regular,
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  primaryText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: typography.medium,
  },
  secondaryBtn: {
    alignItems: "center",
    padding: 10,
  },
  secondaryText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.surface,
  },
  resultText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textPrimary,
    textAlign: "center",
  },
});

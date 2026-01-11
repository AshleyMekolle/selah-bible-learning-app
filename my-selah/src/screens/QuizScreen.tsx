import { View,Text,StyleSheet,ScrollView,Pressable,} from "react-native";
import { useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../theme/color";
import { typography } from "../theme/typography";
import { Ionicons } from "@expo/vector-icons";
import QuizCard from "../quizzes/components/QuizCard";
import QuizProgress from "../quizzes/components/QuizProgress";
import QuestionText from "../quizzes/components/QuestionText";
import AnswerOption from "../quizzes/components/AnswerOption";
import { generateQuiz } from "../quizzes/quizEngine";
import { QuizQuestion, Difficulty, Testament } from "../quizzes/types";
import { SafeAreaView } from "react-native-safe-area-context";
import ContinueButton from "../quizzes/components/ContinueButton";
import { useXP, XPProvider } from "../context/XPContext";

type Props = NativeStackScreenProps<RootStackParamList, "Quiz">;

type GameState = "setup" | "playing" | "results";

export default function QuizScreen({ navigation }: Props) {
  const [gameState, setGameState] = useState<GameState>("setup");
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedTestament, setSelectedTestament] = useState<Testament>("old");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("beginner");
  const [isLoading, setIsLoading] = useState(false);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const { addXP, xp, level } = useXP();

  const startQuiz = () => {
    setIsLoading(true);
    setTimeout(() => {
      const questions = generateQuiz(selectedTestament, selectedDifficulty, 10);
      if (questions.length === 0) {
        const fallbackQuestions = [
          {
            id: "fallback-1",
            testament: selectedTestament,
            difficulty: selectedDifficulty,
            question: "Who was the first man created by God?",
            options: ["Noah", "Adam", "Abraham", "Moses"],
            answerIndex: 1,
            reference: "Genesis 2:7",
            explanation: "Adam was formed from the dust and given life by God.",
          },
          {
            id: "fallback-2",
            testament: selectedTestament,
            difficulty: selectedDifficulty,
            question: "Which prophet was swallowed by a great fish?",
            options: ["Elijah", "Jonah", "Isaiah", "Jeremiah"],
            answerIndex: 1,
            reference: "Jonah 1:17",
          },
        ];
        setQuizQuestions(fallbackQuestions);
      } else {
        setQuizQuestions(questions);
      }
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setIsAnswered(false);
      setGameState("playing");
      setIsLoading(false);
    }, 300);
  };

  const handleAnswerSelect = (index: number) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const awardXP = () => {
    let xpEarned = 0;
    xpEarned += 10;
    if (score === totalQuestions) {
      xpEarned += 20;
    }
    if (selectedDifficulty === "intermediate") {
      xpEarned += 15;
    } else if (selectedDifficulty === "advanced") {
      xpEarned += 25;
    }
    const accuracy = (score / totalQuestions) * 100;
    if (accuracy >= 80) {
      xpEarned += Math.floor(accuracy / 10) * 5;
    }
    
    addXP(xpEarned);
    return xpEarned;
  };

  const handleContinue = () => {
    if (!currentQuestion) return;
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      awardXP();
      setGameState("results");
    }
  };

  const handleRestart = () => {
    setGameState("setup");
    setQuizQuestions([]);
  };
  const getCorrectAnswer = () => {
    if (!currentQuestion || selectedAnswer === null) return "";
    return currentQuestion.options[currentQuestion.answerIndex];
  };
  const renderSetupScreen = () => (
    <ScrollView contentContainerStyle={styles.setupContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Bible Quiz</Text>
        <Text style={styles.subtitle}>
          Test your knowledge of Scripture
        </Text>
      </View>

      <QuizCard>
        <Text style={styles.sectionTitle}>Select Testament</Text>
        <View style={styles.optionsContainer}>
          <Pressable
            style={[
              styles.testamentOption,
              selectedTestament === "old" && styles.selectedOption,
            ]}
            onPress={() => setSelectedTestament("old")}
          >
            <Ionicons
              name="book"
              size={24}
              color={selectedTestament === "old" ? colors.primary : colors.textSecondary}
            />
            <Text
              style={[
                styles.optionText,
                selectedTestament === "old" && styles.selectedOptionText,
              ]}
            >
              Old Testament
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.testamentOption,
              selectedTestament === "new" && styles.selectedOption,
            ]}
            onPress={() => setSelectedTestament("new")}
          >
            <Ionicons
              name="heart"
              size={24}
              color={selectedTestament === "new" ? colors.primary : colors.textSecondary}
            />
            <Text
              style={[
                styles.optionText,
                selectedTestament === "new" && styles.selectedOptionText,
              ]}
            >
              New Testament
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
          Select Difficulty
        </Text>
        <View style={styles.optionsContainer}>
          {(["beginner", "intermediate", "advanced"] as Difficulty[]).map(
            (difficulty) => (
              <Pressable
                key={difficulty}
                style={[
                  styles.difficultyOption,
                  selectedDifficulty === difficulty && styles.selectedOption,
                ]}
                onPress={() => setSelectedDifficulty(difficulty)}
              >
                <Text
                  style={[
                    styles.difficultyText,
                    selectedDifficulty === difficulty && styles.selectedOptionText,
                  ]}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </Text>
                {difficulty === "beginner" && (
                  <Ionicons
                    name="school-outline"
                    size={16}
                    color={selectedDifficulty === difficulty ? colors.primary : colors.textSecondary}
                  />
                )}
                {difficulty === "intermediate" && (
                  <Ionicons
                    name="trending-up-outline"
                    size={16}
                    color={selectedDifficulty === difficulty ? colors.primary : colors.textSecondary}
                  />
                )}
                {difficulty === "advanced" && (
                  <Ionicons
                    name="trophy-outline"
                    size={16}
                    color={selectedDifficulty === difficulty ? colors.primary : colors.textSecondary}
                  />
                )}
              </Pressable>
            )
          )}
        </View>

        <Text style={styles.infoText}>
          {selectedDifficulty === "beginner" && "10 basic questions"}
          {selectedDifficulty === "intermediate" && "10 challenging questions"}
          {selectedDifficulty === "advanced" && "10 expert-level questions"}
        </Text>

        <ContinueButton 
          onPress={startQuiz} 
          label={isLoading ? "Loading..." : "Start Quiz"} 
        />
      </QuizCard>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips</Text>
        <View style={styles.tipItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.tipText}>Read each question carefully</Text>
        </View>
        <View style={styles.tipItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.tipText}>Review the scripture references</Text>
        </View>
        <View style={styles.tipItem}>
          <Ionicons name="checkmark-circle" size={20} color={colors.primary} />
          <Text style={styles.tipText}>Learn from the explanations</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderLoadingScreen = () => (
    <View style={styles.loadingContainer}>
      <Ionicons name="book" size={60} color={colors.primary} />
      <Text style={styles.loadingText}>Preparing your quiz...</Text>
    </View>
  );

  const renderQuizScreen = () => {
    if (!currentQuestion) {
      return renderLoadingScreen();
    }

    return (
      <ScrollView contentContainerStyle={styles.quizContainer}>
        <QuizProgress current={currentQuestionIndex + 1} total={totalQuestions} />

        <QuizCard>
          <QuestionText text={currentQuestion.question} />

          <View style={styles.optionsList}>
            {currentQuestion.options.map((option, index) => (
              <AnswerOption
                key={index}
                text={option}
                selected={selectedAnswer === index}
                correct={index === currentQuestion.answerIndex}
                disabled={isAnswered}
                onPress={() => handleAnswerSelect(index)}
              />
            ))}
          </View>

          {isAnswered && (
            <View style={styles.explanationContainer}>
              <Text style={styles.reference}>
                <Ionicons name="bookmark" size={16} color={colors.primary} />{" "}
                {currentQuestion.reference}
              </Text>
              {currentQuestion.explanation && (
                <Text style={styles.explanation}>
                  {currentQuestion.explanation}
                </Text>
              )}
              {selectedAnswer !== currentQuestion.answerIndex && (
                <Text style={styles.correctAnswer}>
                  Correct answer: {getCorrectAnswer()}
                </Text>
              )}
            </View>
          )}

          {isAnswered && (
            <ContinueButton
              onPress={handleContinue}
              label={
                currentQuestionIndex < totalQuestions - 1
                  ? "Next Question"
                  : "See Results"
              }
            />
          )}
        </QuizCard>

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            Score: <Text style={styles.scoreValue}>{score}</Text> / {totalQuestions}
          </Text>
        </View>
      </ScrollView>
    );
  };

   const renderResultsScreen = () => {
    const xpEarned = calculateXPEarned(); // We'll create this function
    
    return (
      <ScrollView contentContainerStyle={styles.resultsContainer}>
        <View style={styles.resultsHeader}>
          <Ionicons
            name={score === totalQuestions ? "trophy" : "star"}
            size={60}
            color={score === totalQuestions ? colors.primary : "#FFC107"}
          />
          <Text style={styles.resultsTitle}>
            {score === totalQuestions ? "Perfect Score!" : "Quiz Complete!"}
          </Text>
          <Text style={styles.resultsSubtitle}>
            {selectedTestament === "old" ? "Old Testament" : "New Testament"} •{" "}
            {selectedDifficulty}
          </Text>
        </View>

        <QuizCard>
          <View style={styles.scoreDisplay}>
            <Text style={styles.finalScore}>{score}</Text>
            <Text style={styles.finalScoreLabel}>out of {totalQuestions}</Text>
          </View>

          {/* Add XP Earned Section */}
          <View style={styles.xpSection}>
            <View style={styles.xpHeader}>
              <Ionicons name="star" size={20} color="#F59E0B" />
              <Text style={styles.xpTitle}>Experience Points</Text>
            </View>
            <View style={styles.xpEarned}>
              <Text style={styles.xpEarnedText}>+{xpEarned} XP</Text>
              <Text style={styles.xpTotalText}>Total: {xp} XP</Text>
            </View>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>Level {level}</Text>
              <View style={styles.xpBar}>
                <View 
                  style={[
                    styles.xpProgress, 
                    { width: `${calculateLevelProgress()}%` }
                  ]} 
                />
              </View>
            </View>
          </View>

          <View style={styles.resultsStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {Math.round((score / totalQuestions) * 100)}%
              </Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalQuestions}</Text>
              <Text style={styles.statLabel}>Questions</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {selectedDifficulty.charAt(0).toUpperCase()}
              </Text>
              <Text style={styles.statLabel}>Level</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <Pressable style={styles.restartButton} onPress={handleRestart}>
              <Ionicons name="refresh" size={20} color={colors.primary} />
              <Text style={styles.restartButtonText}>Restart Quiz</Text>
            </Pressable>
            <Pressable
              style={styles.homeButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="home" size={20} color="#FFF" />
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </Pressable>
          </View>
        </QuizCard>

        {score < totalQuestions && (
          <View style={styles.encouragement}>
            <Ionicons name="bulb" size={24} color={colors.primary} />
            <Text style={styles.encouragementText}>
              Keep studying the Word! Each quiz helps you grow in knowledge.
            </Text>
          </View>
        )}
      </ScrollView>
    );
  };

  const calculateXPEarned = () => {
    let xpEarned = 0;
    xpEarned += 10;
    
    if (score === totalQuestions) {
      xpEarned += 20;
    }
    
    if (selectedDifficulty === "intermediate") {
      xpEarned += 15;
    } else if (selectedDifficulty === "advanced") {
      xpEarned += 25;
    }
    
    const accuracy = (score / totalQuestions) * 100;
    if (accuracy >= 80) {
      xpEarned += Math.floor(accuracy / 10) * 5;
    }
    
    return xpEarned;
  };

  const calculateLevelProgress = () => {
    const xpPerLevel = 100;
    const currentLevelXP = xp % xpPerLevel;
    return (currentLevelXP / xpPerLevel) * 100;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {isLoading ? (
        renderLoadingScreen()
      ) : gameState === "setup" ? (
        renderSetupScreen()
      ) : gameState === "playing" ? (
        renderQuizScreen()
      ) : (
        renderResultsScreen()
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  setupContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  quizContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  resultsContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: typography.bold,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  testamentOption: {
    flex: 1,
    minWidth: "48%",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedOption: {
    backgroundColor: colors.primary + "10",
    borderColor: colors.surface,
  },
  optionText: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  selectedOptionText: {
    color: colors.primary,
    fontFamily: typography.semibold,
  },
  difficultyOption: {
    flex: 1,
    minWidth: "30%",
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "transparent",
  },
  difficultyText: {
    fontSize: 13,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  infoText: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: colors.textSecondary + "40",
  },
  buttonText: {
    fontFamily: typography.medium,
    color: "#FFF",
    fontSize: 15,
  },
  buttonTextDisabled: {
    color: colors.textSecondary,
  },
  tipsContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: colors.primary + "08",
    borderRadius: 16,
  },
  tipsTitle: {
    fontSize: 18,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    flex: 1,
  },
  optionsList: {
    marginBottom: 20,
  },
  explanationContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: colors.primary + "08",
    borderRadius: 12,
  },
  reference: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.primary,
    marginBottom: 8,
  },
  explanation: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  correctAnswer: {
    fontSize: 14,
    fontFamily: typography.semibold,
    color: colors.primary,
    marginTop: 4,
  },
  scoreContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  scoreText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  scoreValue: {
    fontFamily: typography.bold,
    color: colors.primary,
  },
  resultsHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  resultsTitle: {
    fontSize: 28,
    fontFamily: typography.bold,
    color: colors.textPrimary,
    marginTop: 16,
    marginBottom: 8,
  },
  resultsSubtitle: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
  scoreDisplay: {
    alignItems: "center",
    marginBottom: 24,
  },
  finalScore: {
    fontSize: 64,
    fontFamily: typography.bold,
    color: colors.primary,
    lineHeight: 70,
  },
  finalScoreLabel: {
    fontSize: 16,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
  resultsStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontFamily: typography.bold,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    fontFamily: typography.regular,
    color: colors.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.primary,
  },
  actionButtons: {
    gap: 12,
  },
  restartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  restartButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: colors.primary,
  },
  homeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: colors.primary,
  },
  homeButtonText: {
    fontSize: 16,
    fontFamily: typography.medium,
    color: "#FFF",
  },
  encouragement: {
    marginTop: 24,
    padding: 16,
    backgroundColor: colors.primary + "08",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  encouragementText: {
    fontSize: 14,
    fontFamily: typography.regular,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 20,
  },
   xpSection: {
    marginTop: 20,
    marginBottom: 30,
    padding: 16,
    backgroundColor: colors.primary + "08",
    borderRadius: 12,
  },
  xpHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },
  xpTitle: {
    fontSize: 16,
    fontFamily: typography.semibold,
    color: colors.textPrimary,
  },
  xpEarned: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  xpEarnedText: {
    fontSize: 24,
    fontFamily: typography.bold,
    color: "#F59E0B",
  },
  xpTotalText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textSecondary,
  },
  levelContainer: {
    alignItems: "center",
  },
  levelText: {
    fontSize: 14,
    fontFamily: typography.medium,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  xpBar: {
    width: "100%",
    height: 8,
    backgroundColor: colors.textSecondary + "20",
    borderRadius: 4,
    overflow: "hidden",
  },
  xpProgress: {
    height: "100%",
    backgroundColor: "#F59E0B",
    borderRadius: 4,
  },
});
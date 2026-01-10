import { QuizQuestion, Difficulty, Testament } from "./types";
import { oldTestamentQuestions } from "./questions/old_testament";
import { newTestamentQuestions } from "./questions/new_testament";

export function generateQuiz(
  testament: Testament,
  difficulty: Difficulty,
  limit = 5
): QuizQuestion[] {
  const pool =
    testament === "old"
      ? oldTestamentQuestions
      : newTestamentQuestions;

  const filtered = pool.filter(
    q => q.difficulty === difficulty
  );

  return shuffle(filtered).slice(0, limit);
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

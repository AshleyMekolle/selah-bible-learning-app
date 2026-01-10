import { QuizQuestion } from "../types";

export const newTestamentQuestions: QuizQuestion[] = [
{
    id: "nt-1",
    testament: "old",
    difficulty: "beginner",
    question: "Who was the first man created by God?",
    options: ["Noah", "Adam", "Abraham", "Moses"],
    answerIndex: 1,
    reference: "Genesis 2:7",
    explanation: "Adam was formed from the dust and given life by God.",
  },
  {
    id: "nt-2",
    testament: "old",
    difficulty: "intermediate",
    question: "Which prophet was swallowed by a great fish?",
    options: ["Elijah", "Jonah", "Isaiah", "Jeremiah"],
    answerIndex: 1,
    reference: "Jonah 1:17",
  },
]
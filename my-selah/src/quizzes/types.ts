export type Difficulty = "beginner" | "intermediate" | "advanced"
export type Testament = "old" | "new"

export type QuizQuestion = {
    id: string;
    testament: Testament;
    difficulty: Difficulty;
    question: string;
    options: string[];
    answerIndex: number;
    reference: string;
    explanation?: string;
}
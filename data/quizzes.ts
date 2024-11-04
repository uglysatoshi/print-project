// /data/quizzes.ts

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export const quizData: Question[] = [
  {
    question: "What is the primary color in RGB?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: "Red",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
];

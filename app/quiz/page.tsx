// /app/quiz/page.tsx

import React from 'react';
import Quiz from '@/components/Quiz';
import { quizData } from '@/data/quizzes';

const QuizPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Take the Quiz</h1>
      <Quiz questions={quizData} />
    </div>
  );
};

export default QuizPage;

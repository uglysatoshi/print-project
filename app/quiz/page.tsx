import React from 'react';
import Quiz from '@/components/Quiz';
import { quizData } from '@/data/quizzes';

const QuizPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Quiz questions={quizData} />
    </div>
  );
};

export default QuizPage;

"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/data/quizzes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);

  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      router.push('/results'); 
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mb-6">
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(option)}
                variant="outline"
                className={`w-full ${
                  selectedAnswer === option ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {option}
              </Button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="mt-4 text-center">
              <p
                className={`text-lg font-semibold ${
                  selectedAnswer === question.correctAnswer ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Wrong answer.'}
              </p>
              <Button onClick={handleNextQuestion} className="mt-4">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
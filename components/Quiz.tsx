"use client"

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/data/quizzes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {useUserContext} from "@/context/UserContext";

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { setUserData } = useUserContext();
  const [score, setScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [semiScore, setSemiScore] = useState(0);
  const [theme1, setScore1] = useState(0);
  const [theme2, setScore2] = useState(0);
  const [theme3, setScore3] = useState(0);
  const [theme4, setScore4] = useState(0);
  const [theme5, setScore5] = useState(0);
  const [theme6, setScore6] = useState(0);


  const { name, group, date } = useUserContext();


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();


  // Функция для перемешивания массива
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Перемешиваем варианты ответа для текущего вопроса
  const shuffledOptions = useMemo(
      () => shuffleArray(questions[currentQuestionIndex].options), [currentQuestionIndex, questions] // Обновляем при смене вопроса
  );

  const handleAnswerClick = (answer: string) => {
      if (answer === questions[currentQuestionIndex].correctAnswer) {
        setRightScore((prev: number) => prev + 1)
        setScore((prev: number) => prev + 2);
        // Подсчёт баллов по темам
        switch (questions[currentQuestionIndex].theme) {
          case "Современные технологии цифровой печати":
            setScore1((prev) => prev + 1);
            break;
          case "Электрофотография":
            setScore2((prev) => prev + 1);
            break;
          case "Импульсная и непрерывная струйная печать":
            setScore3((prev) => prev + 1);
            break;
          case "Термографические и термосублимационные технологии":
            setScore4((prev) => prev + 1);
            break;
          case "Цифровая фотопечать":
            setScore5((prev) => prev + 1);
            break;
          case "Технологии Computer":
            setScore6((prev) => prev + 1);
            break;
          default:
            console.warn(`Unknown theme: ${questions[currentQuestionIndex].theme}`);
      }
    }
    if (answer === questions[currentQuestionIndex].semiCorrectAnswer) {
      setSemiScore((prev: number) => prev + 1);
      setScore((prev: number) => prev + 1);
    }
    console.log(score, theme1, theme2, theme3, theme4, theme5, theme6);
    setSelectedAnswer(answer);
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setUserData({
        name: name,
        group: group,
        date: date,
        score: score,
        theme1: theme1,
        theme2: theme2,
        theme3: theme3,
        theme4: theme4,
        theme5: theme5,
        theme6: theme6,
        semiScore: semiScore,
        rightScore: rightScore,
      });
      router.push('/results');
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="max-w-2xl mb-6">
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            {shuffledOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(option)}
                variant="outline"
                className={`w-full ${
                  selectedAnswer === option ? 'bg-black text-white' : ''
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
          {selectedAnswer && (
            <div className="mt-4 text-center">
              <Button onClick={handleNextQuestion} className="mt-4">
                {currentQuestionIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
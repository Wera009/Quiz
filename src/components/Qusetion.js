import Que from "./que";
import React, { useCallback, useState } from "react";
import QuizOverView from "./QuizOverview";
import QuestionPart from "./QusetionPart";

export default function Question() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQueIndex = userAnswer.length;

  const handleAnswer = useCallback(function handleAnswer(selectedAnswer) {
    setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);
  }, []);

  const handleSkipAnsw = useCallback(() => handleAnswer(null), [handleAnswer]);
  if (activeQueIndex === Que.length) {
    return <QuizOverView userAnswer={userAnswer}/>;
  }

  return (
    <>
      <div id="quiz">
        <QuestionPart
          key={activeQueIndex} /*key plays very imp role 
          it makes QueTimer to re-execute every time the que index changes & 
          thereby timer resets evertime the que changes without strucking*/
          index={activeQueIndex}
          onSelectAnswer={handleAnswer}
          onSkip={handleSkipAnsw}
        />
      </div>
    </>
  );
}

import image from "../assets/victory.jpg";
import Que from "./que";

export default function QuizOverview({ userAnswer }) {
  const skippedAnswers = userAnswer.filter((answer) => answer == null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === Que[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <>
      <div id="summary">
        <img src={image} alt="Quiz-complete" />
        <h2>Quiz completed</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedAnswersShare}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{correctAnswersShare}%</span>
            <span className="text">answered correctly</span>
          </p>
          <p>
            <span className="number">{wrongAnswersShare}%</span>
            <span className="text">answered incorrectly</span>
          </p>
        </div>
        <ol>
          {userAnswer.map((answer, index) => {
            let cssClass = "user-answer";
            if (answer == null) {
              cssClass += " skipped";
            } else if (answer === Que[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }
            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{Que[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

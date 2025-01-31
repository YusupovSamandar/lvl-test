"use client";
import * as React from "react";
import quiz from "./quizes";
import axios from "axios";

export default function SevenSecondQuiz() {
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [result, setResult] = React.useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    detailedCorrectAnswers: { a2: 0, b1: 0, b2: 0 },
  });

  const { questions } = quiz;

  const {
    question,
    choices,
    correctAnswer,
    type: questionType,
  } = questions[activeQuestion];

  const sendResults = async () => {
    setActiveQuestion(0);
    setShowResult(true);
    const lastResults = selectedAnswer
      ? {
          ...result,
          score: result.score + 5,
          correctAnswers: result.correctAnswers + 1,
          detailedCorrectAnswers: {
            ...result.detailedCorrectAnswers,
            [questionType]: result.detailedCorrectAnswers[questionType] + 1,
          },
        }
      : { ...result, wrongAnswers: result.wrongAnswers + 1 };
    const studentResult = `A2: ${lastResults.detailedCorrectAnswers.a2}; B1: ${lastResults.detailedCorrectAnswers.b1}; B2: ${lastResults.detailedCorrectAnswers.b2}`;
    const today = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    const shortDateFormat = today.toLocaleDateString("en-US", options);
    const sendingResult = [
      sessionStorage.getItem("firstName"),
      sessionStorage.getItem("lastName"),
      sessionStorage.getItem("phoneNumber"),
      studentResult,
      Math.round((lastResults.correctAnswers / questions.length) * 100) + "%",
      shortDateFormat,
    ];
    const { data } = await axios.post("/api/add", {
      userData: sendingResult,
    });
    sessionStorage.clear();
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      if(activeQuestion <= 11 && result.wrongAnswers > (selectedAnswer ? 2 : 1)) {
        sendResults();
      }else if (activeQuestion <= 23 && result.wrongAnswers > (selectedAnswer ? 4 : 3)) {
        sendResults();
      }else if (activeQuestion <= 35 && result.wrongAnswers > (selectedAnswer ? 6 : 5)) {
        sendResults();
      }else {
        setActiveQuestion((prev) => prev + 1);
      }
    } else {
      sendResults();
    }
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
            detailedCorrectAnswers: {
              ...prev.detailedCorrectAnswers,
              [questionType]: prev.detailedCorrectAnswers[questionType] + 1,
            },
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  const onAnswerSelected = (answer: string, index: any) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div className="flx-end">
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <div>
              <span className="active-question-no">
                {questionType.toUpperCase()}
              </span>
            </div>
          </div>
          <h2 style={{whiteSpace: 'pre-line'}}>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : undefined
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
}

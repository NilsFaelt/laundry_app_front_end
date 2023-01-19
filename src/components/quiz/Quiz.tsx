import axios from "axios";
import * as styles from "./quiz.style";
import { useEffect, useState } from "react";
import { BackgroundContainer } from "../myBookings/myBookings.style";
import { Container } from "../myBookings/myBookings.style";
import { MainBtn, DangerBUtton } from "../../styles/globalStyles";
import { BtnDiv } from "../createUser/createUser.style";
import Spinner from "../../ui/loadingSpinner/Spinner";
import { ITrivia } from "../../types/triviaTypes";
import { fixAnswers } from "./utils/fixAnswers";
import { getQuiz } from "./utils/getTrvia";

const Quiz = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [trivia, setTrivia] = useState<ITrivia | null>(null);
  const [myAnswer, setMyAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [points, setPoints] = useState(0);
  const [preventCheat, setPreventCheat] = useState(false);
  const [booleanAsnwer, setBooleanAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    if (trivia !== null) {
      setAnswers(fixAnswers(trivia));
    }
  }, [trivia]);

  const handleClickTrue = () => {
    setBooleanAnswer(true);
    if (trivia?.correct_answer === "True" && preventCheat === false) {
      setPoints((prev) => prev + 1);
      setPreventCheat(true);
    } else if (
      trivia?.correct_answer !== "True" &&
      points > 0 &&
      preventCheat === false
    ) {
      setPoints((prev) => prev - 1);
      setPreventCheat(true);
    } else {
      setPreventCheat(true);
    }
  };
  const handleClickFalse = () => {
    setBooleanAnswer(false);
    if (trivia?.correct_answer === "False" && preventCheat === false) {
      setPoints((prev) => prev + 1);
      setPreventCheat(true);
    } else if (
      trivia?.correct_answer !== "False" &&
      points > 0 &&
      preventCheat === false
    ) {
      setPoints((prev) => prev - 1);
      setPreventCheat(true);
    } else {
      setPreventCheat(true);
    }
  };

  const handeleMultipleAnswers = (answer: string) => {
    setMyAnswer(answer);
    if (answer === trivia?.correct_answer && preventCheat === false) {
      setPoints((prev) => prev + 1);
      setPreventCheat(true);
    } else if (points > 0 && preventCheat === false) {
      setPoints((prev) => prev - 1);
      setPreventCheat(true);
    } else setPreventCheat(true);
  };
  return (
    <BackgroundContainer>
      <Container>
        <styles.Title>
          <span>My Points: </span>
          {points}
        </styles.Title>
        {trivia === null && startQuiz && <Spinner />}
        <styles.Title>
          {startQuiz ? <span>Category: </span> : <span>Start Quiz: </span>}
          {trivia?.category}
        </styles.Title>
        {booleanAsnwer !== null || myAnswer !== "" ? (
          <styles.Title>
            <span>Answer: </span>
            {trivia?.correct_answer}
          </styles.Title>
        ) : null}
        <styles.P>{trivia?.question}</styles.P>
        {trivia?.type === "boolean" && (
          <BtnDiv style={{ marginBottom: "30px" }}>
            <MainBtn onClick={() => handleClickTrue()}>True</MainBtn>
            <DangerBUtton onClick={() => handleClickFalse()}>
              False
            </DangerBUtton>
          </BtnDiv>
        )}
        {trivia?.type === "multiple" ? (
          <styles.FourBtnDiv>
            {answers?.map((answer) => {
              return (
                <styles.Btn
                  key={answer}
                  onClick={() => handeleMultipleAnswers(answer)}
                >
                  {answer}
                </styles.Btn>
              );
            })}
          </styles.FourBtnDiv>
        ) : null}
        <BtnDiv>
          {!startQuiz ? (
            <MainBtn
              onClick={() =>
                getQuiz(
                  setTrivia,
                  setBooleanAnswer,
                  setPreventCheat,
                  setStartQuiz,
                  setMyAnswer
                )
              }
            >
              Start
            </MainBtn>
          ) : (
            <MainBtn
              onClick={() =>
                getQuiz(
                  setTrivia,
                  setBooleanAnswer,
                  setPreventCheat,
                  setStartQuiz,
                  setMyAnswer
                )
              }
            >
              next
            </MainBtn>
          )}
        </BtnDiv>
      </Container>
    </BackgroundContainer>
  );
};

export default Quiz;

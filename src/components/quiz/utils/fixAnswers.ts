import { ITrivia } from "../../../types/triviaTypes";

export const fixAnswers = (trivia: ITrivia): string[] => {
  if (typeof trivia.incorrect_answers !== "undefined") {
    const arrayOfAnswers = trivia?.incorrect_answers;
    arrayOfAnswers?.push(trivia?.correct_answer);
    const shuffledArray = arrayOfAnswers?.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
  }
  return [];
};

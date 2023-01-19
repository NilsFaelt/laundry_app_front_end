import axios from "axios";
import { ITrivia } from "../../../types/triviaTypes";

export const getQuiz = async (
  setTrivia: React.Dispatch<React.SetStateAction<ITrivia | null>>,
  setBooleanAnswer: React.Dispatch<React.SetStateAction<boolean | null>>,
  setPreventCheat: React.Dispatch<React.SetStateAction<boolean>>,
  setStartQuiz?: React.Dispatch<React.SetStateAction<boolean>>,
  setMyAnswer?: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    if (setStartQuiz) setStartQuiz(true);
    if (setMyAnswer) setMyAnswer("");
    setTrivia(null);
    setPreventCheat(false);
    const data = await axios(`https://opentdb.com/api.php?amount=1`);
    setBooleanAnswer(null);
    setTrivia(data.data.results[0]);
  } catch (err: any) {
    throw { msg: err.message };
  }
};

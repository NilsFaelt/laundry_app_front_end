export interface ITrivia {
  category: string;
  correct_answer: string;
  type: string;
  incorrect_answers?: string[];
  question: string;
}

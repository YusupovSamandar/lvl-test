export interface QuizResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  detailedCorrectAnswers: Record<string, number>;
}

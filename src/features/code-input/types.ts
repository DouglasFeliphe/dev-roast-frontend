export interface LeaderboardEntryData {
  rank: number;
  score: number;
  codePreview: string;
  language: string;
}

export interface CodeInputState {
  code: string;
  roastMode: boolean;
  isSubmitting: boolean;
}

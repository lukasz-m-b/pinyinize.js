export interface TonifyOptions {
  allowSlashToneMarks: boolean;
}

export function tonify(phrase: string, options: TonifyOptions): string;
import { useMemo, useState } from 'react';

const LINE_HEIGHT = 20;
const MIN_LINES = 16;

export interface UseCodeInputReturn {
  code: string;
  lineCount: number;
  visibleLines: number;
  setCode: (code: string) => void;
  isEmpty: boolean;
  isValid: boolean;
}

export const useCodeInput = (initialCode = '', containerHeight = 360): UseCodeInputReturn => {
  const [code, setCode] = useState(initialCode);

  const lineCount = useMemo(() => {
    if (!code) return MIN_LINES;
    return Math.max(code.split('\n').length, MIN_LINES);
  }, [code]);

  const visibleLines = useMemo(() => {
    return Math.max(MIN_LINES, Math.ceil(containerHeight / LINE_HEIGHT));
  }, [containerHeight]);

  const isEmpty = code.trim().length === 0;
  const isValid = lineCount <= 500 && !isEmpty;

  return {
    code,
    lineCount,
    visibleLines,
    setCode,
    isEmpty,
    isValid,
  };
};

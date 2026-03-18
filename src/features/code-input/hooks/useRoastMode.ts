import { useCallback, useState } from 'react';

export interface UseRoastModeReturn {
  isRoastMode: boolean;
  toggle: () => void;
  setRoastMode: (value: boolean) => void;
}

export const useRoastMode = (initialValue = false): UseRoastModeReturn => {
  const [isRoastMode, setIsRoastMode] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsRoastMode((prev) => !prev);
  }, []);

  const setRoastMode = useCallback((value: boolean) => {
    setIsRoastMode(value);
  }, []);

  return {
    isRoastMode,
    toggle,
    setRoastMode,
  };
};

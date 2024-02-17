import { useCallback, useEffect, useState } from 'react';

export default function usePostTimer({ content, setTitle, setContent, handleSubmit }) {
  const [timeLeft, setTimeLeft] = useState(75);
  const [isTicking, setIsTicking] = useState(false);
  // const [message, setMessage] = useState('');
  const [stage, setStage] = useState(1);

  useEffect(() => {
    if (!isTicking || timeLeft < 1) return;

    const interval = setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    if (timeLeft === 1) {
      if (stage === 1) {
        // executeFunctionA();
        setMessage('')
        setTimeLeft(30);
        setStage(2);
      } else if (stage === 2) {
        // executeFunctionB();
        setMessage('')
        setTimeLeft(15);
        setStage(3);
      } else if (stage === 3) {
        // executeFunctionC();
        setMessage('')
        setIsTicking(false);
      }
    }

    return () => clearInterval(interval);
  }, [isTicking, timeLeft, stage]);

  const startTimer = useCallback(() => setIsTicking(true), []);
  const stopTimer = useCallback(() => setIsTicking(false), []);
  const resetTimer = useCallback(() => setTimeLeft(120), []);

  return {
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
  };
}

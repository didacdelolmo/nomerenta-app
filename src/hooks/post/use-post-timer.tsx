import { useCallback, useEffect, useState } from 'react';
import { replace } from '../../utils/replacement';
import useGetReplacementsQuery from '../../api/queries/replacement/use-get-replacements-query';

export default function usePostTimer({ content, setContent, handleSubmit }) {
  const firstStageTime = 30;
  const secondStageTime = 16;
  const thirdStageTime = 8;

  const firstStageMessage = 'para correción inclusiva';
  const secondStageMessage = 'para correción inclusiva';
  const thirdStageMessage = 'para publicar';

  const [timeLeft, setTimeLeft] = useState(firstStageTime);
  const [isTicking, setIsTicking] = useState(false);
  const [message, setMessage] = useState(firstStageMessage);
  const [stage, setStage] = useState(1);
  const { data: response } = useGetReplacementsQuery();

  const replaceWords = () => {
    if (response) {
      setContent(replace(content, response.data.replacements));
    }
  };

  useEffect(() => {
    if (!isTicking || timeLeft < 0) return;

    const interval = setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    if (timeLeft === 0) {
      if (stage === 1) {
        replaceWords();
        setMessage(secondStageMessage);
        setTimeLeft(secondStageTime);
        setStage(2);
      } else if (stage === 2) {
        replaceWords();
        setMessage(thirdStageMessage);
        setTimeLeft(thirdStageTime);
        setStage(3);
      } else if (stage === 3) {
        handleSubmit();
        setMessage('');
        setIsTicking(false);
      }
    }

    return () => clearInterval(interval);
  }, [isTicking, timeLeft, stage]);

  const startTimer = useCallback(() => setIsTicking(true), []);
  const stopTimer = useCallback(() => setIsTicking(false), []);
  const resetTimer = useCallback(() => setTimeLeft(120), []);

  return {
    message,
    timeLeft,
    startTimer,
    stopTimer,
    resetTimer,
    replaceWords,
    isTicking,
  };
}

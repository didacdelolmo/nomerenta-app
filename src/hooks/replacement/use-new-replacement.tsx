import { useState } from 'react';

export default function useNewReplacement() {
  const [originalText, setOriginalText] = useState('');
  const [newReplacement, setNewReplacement] = useState('');

  const handleOriginalText = (e) => {
    setOriginalText(e.target.value);
  };
  const handleNewReplacement = (e) => {
    setNewReplacement(e.target.value);
  };

  const clearNewReplacement = () => {
    setOriginalText('');
    setNewReplacement('');
  };

  return {
    originalText,
    newReplacement,
    handleOriginalText,
    handleNewReplacement,
    clearNewReplacement,
  };
}

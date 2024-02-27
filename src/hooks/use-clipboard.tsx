import { useState } from 'react';

export default function useClipboard() {
  const [hasCopied, setHasCopied] = useState(false);

  const copyCurrentURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setHasCopied(true);
  };

  const copyInput = (input: string) => {
    navigator.clipboard.writeText(input);
    setHasCopied(true);
  };

  return {
    hasCopied,
    copyCurrentURL,
    copyInput,
  };
}

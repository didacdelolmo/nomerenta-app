import useClipboard from './use-clipboard';

export default function useShare({ title, text, url }) {
  const { hasCopied, copyInput } = useClipboard();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        console.error(error);
      }
    } else {
      copyInput(url);
    }
  };

  return {
    hasCopied,
    handleShare,
  };
}

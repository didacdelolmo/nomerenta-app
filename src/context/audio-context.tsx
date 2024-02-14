import { createContext, useContext, useEffect, useRef, useState } from 'react';
import audioFile from '../assets/audio.mp3';

const AudioContext = createContext({
  isPlaying: false,
  toggleAudio: () => {},
});

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFile));

  useEffect(() => {
    const audio = audioRef.current;

    audio.loop = true;
    audio.volume = 0.05;

    if (isPlaying) {
      console.log('hey');
      audio.play();
    } else {
      audio.pause();
    }

    return () => audio.pause();
  }, [isPlaying]);

  const toggleAudio = () => setIsPlaying(!isPlaying);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

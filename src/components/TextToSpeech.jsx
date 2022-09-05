import React, { useEffect, useState } from 'react';
import { FaVolumeUp, FaPause } from 'react-icons/fa';

const TextToSpeech = ({ text = 'Selam mom' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState([]);

  const synth = window.speechSynthesis;

  const populateVoiceList = () => {
    setVoices(synth.getVoices());
  };

  const speak = () => {
    if (synth.speaking && synth.paused) {
      synth.resume();
      return console.log('resume');
    } else if (synth.speaking) {
      synth.pause();
      return console.log('pause');
    } else {
      const utterThis = new SpeechSynthesisUtterance(text);
      console.log({ utterThis });
      utterThis.voice = voices[1];
      utterThis.pitch = 1;
      utterThis.rate = 1;
      synth.speak(utterThis);

      utterThis.onend = () => setIsPlaying(false);
      utterThis.onstart = () => setIsPlaying(true);
      utterThis.pause = () => setIsPlaying(false);
    }
  };

  useEffect(
    () => {
      if (synth.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList();
      }

      return () => {};
    },
    [setVoices, isPlaying],
    synth
  );

  return (
    <div onClick={() => speak()}>
      {isPlaying ? <FaPause className='animate-pulse' /> : <FaVolumeUp />}
    </div>
  );
};

export default TextToSpeech;

import React, { useState, useRef } from "react";
import PlayIcon from '../assets/images/icon-play.svg'


export default function AudioPlayer({ src }) {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      <button onClick={togglePlay} className='btn'>
        <img src={PlayIcon} alt='play' aria-label='play' />
      </button>
    </div>
  );
}
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer11({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, progressRef, handleProgressClick } = useAudio(url);
 

  return (
    <div className="player11 audioPlayer">
      <div className="top">

      <PlayPause {...{ isPlaying, togglePlay}} />

        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
      </div>

      <div className="progress">
       {isCurrentTime ? <span className="time">{formatTime(currentTime)}</span> : <span/>}
        <div className="bar-bg">
          <div
          ref={progressRef} onClick={handleProgressClick}
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
       {isDurationTime ? <span className="time">{formatTime(duration)}</span> : <span/>}
      </div>

      <div className="bottom">
        <div className="bars">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bar-line"
              style={{ height: 10 + Math.random() * 10 }}
            ></div>
          ))}
        </div>

       {isVolume ? <button className="mute" onClick={toggleMute}>
          {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
        </button> : <span/> }
      </div>
    </div>
  );
}

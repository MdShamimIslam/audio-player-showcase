import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, url } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime,  } = showcaseElements;
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);


  return (
    <div className="ap1">
      <div className="ap1-top">
        <div>
          <h3 className="ap1-title">{title}</h3>
          <p className="ap1-artist">{artist}</p>
        </div>
        <span className="ap1-time">
          {isCurrentTime && formatTime(currentTime)}
          {isCurrentTime && isDurationTime && '/'}
          {isDurationTime && formatTime(duration)}
        </span>
      </div>

      <div className="ap1-bar-wrap">
        <div className="ap1-bar-bg">
          <div
            className="ap1-bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="ap1-controls">
        {isForBack && <button className="ap1-btn"> <SkipBack size={20} /> </button>}
        <button className="ap1-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        {isForBack && <button className="ap1-btn"> <SkipForward size={20} /> </button>}

        {isVolume && <div className="ap1-vol">
          <Volume2 size={16} className="ap1-vol-icon" />
          <div className="ap1-vol-bg">
            <div className="ap1-vol-fill"></div>
          </div>
        </div>}
      </div>
    </div>
  );
}

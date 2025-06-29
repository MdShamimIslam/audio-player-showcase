import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer15({attributes}) {
  const {title, artist, url, cover} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);  

  return (
    <div className="ap15">
      <div className="ap15-head">
        <div>
          <h3 className="ap15-title">{title}</h3>
          <p className="ap15-artist">{artist}</p>
        </div>
        <div className={`ap15-cover ${isPlaying ? 'spin' : ''}`}>
          <img src={cover} alt={title} className="ap15-img" />
        </div>
      </div>

      <div className="ap15-progressbox">
        <div className="ap15-bar-wrap">
          <div
            className="ap15-bar"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="ap15-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="ap15-controls">
        <button className="ap15-btn">
          <SkipBack size={30} />
        </button>

        <button className="ap15-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={30} /> : <Play size={30} className="ml-1" />}
        </button>

        <button className="ap15-btn">
          <SkipForward size={30} />
        </button>
      </div>
    </div>
  );
}

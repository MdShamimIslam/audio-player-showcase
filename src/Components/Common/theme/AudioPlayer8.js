import { Play, Pause, RefreshCw, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer8({attributes}) {
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap8">
      <div className="ap8-head">
        <div>
          <h3 className="ap8-title">{title}</h3>
          <p className="ap8-artist">{artist}</p>
        </div>
        <div className="ap8-icons">
          <button className="ap8-icon">
            <RefreshCw size={16} />
          </button>
          <button className="ap8-icon">
            <Volume2 size={16} />
          </button>
        </div>
      </div>

      <div className="ap8-progress">
        <div className="ap8-bar">
          <div
            className="ap8-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <div
            className="ap8-thumb"
            style={{
              left: `calc(${(currentTime / duration) * 100}% - 8px)`,
              top: '50%',
            }}
          ></div>
        </div>
        <div className="ap8-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="ap8-controls">
        <button className="ap8-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>
      </div>
    </div>
  );
}

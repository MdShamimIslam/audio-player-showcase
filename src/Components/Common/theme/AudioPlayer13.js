import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer13({attributes}) {
  const {title, artist, cover, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap13">
      <div className="ap13-header">
        <div className="ap13-thumb">
          <img 
            src={cover}
            alt={title}
            className="ap13-thumb-img"
          />
          <div className={`ap13-overlay ${isPlaying ? 'show' : ''}`}>
            <div className="ap13-overlay-icon">
              <Pause size={12} className="ap13-pause-icon" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="ap13-title">{title}</h3>
          <p className="ap13-artist">{artist}</p>
          <div className="ap13-time">
            <span>{formatTime(currentTime)}</span>
            <span className="sep">/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="ap13-bar-wrap">
        <div className="ap13-bar">
          <div
            className="ap13-bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="ap13-controls">
        <button className="ap13-icon">
          <SkipBack size={16} />
        </button>

        <button className="ap13-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-05" />}
        </button>

        <button className="ap13-icon">
          <SkipForward size={16} />
        </button>

        <button className="ap13-icon">
          <Volume2 size={16} />
        </button>
      </div>
    </div>
  );
}

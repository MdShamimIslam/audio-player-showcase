import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer9({attributes}) {
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap9">
      <div className="ap9-head">
        <div className="ap9-icon">
          <Music size={18} />
        </div>
        <div>
          <h3 className="ap9-title">{title}</h3>
          <p className="ap9-artist">{artist}</p>
        </div>
      </div>

      <div className="ap9-bar">
        <div
          className="ap9-bar-fill"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="ap9-controls">
        <span className="ap9-time">{formatTime(currentTime)}</span>

        <div className="ap9-buttons">
          <button className="ap9-btn">
            <SkipBack size={18} />
          </button>
          <button className="ap9-play" onClick={togglePlay}>
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-05" />}
          </button>
          <button className="ap9-btn">
            <SkipForward size={18} />
          </button>
        </div>

        <span className="ap9-time">{formatTime(duration)}</span>
      </div>
    </div>
  );
}

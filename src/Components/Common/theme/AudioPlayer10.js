import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer10({attributes}) {
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap10">
      <div className="ap10-banner">
        <div className="ap10-overlay"></div>
        <div className="ap10-info">
          <h3 className="ap10-title">{title}</h3>
          <p className="ap10-artist">{artist}</p>
        </div>
      </div>

      <div className="ap10-body">
        <div className="ap10-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="ap10-progress">
          <div
            className="ap10-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="ap10-controls">
          <button className="ap10-icon">
            <Volume2 size={20} />
          </button>

          <div className="ap10-main">
            <button className="ap10-icon">
              <SkipBack size={20} />
            </button>
            <button className="ap10-play" onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-05" />}
            </button>
            <button className="ap10-icon">
              <SkipForward size={20} />
            </button>
          </div>

          <div className="ap10-spacer" />
        </div>
      </div>
    </div>
  );
}

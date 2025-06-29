import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer12({attributes}) {
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap12">
      <div className="ap12-head">
        <div>
          <h3 className="ap12-title">{title}</h3>
          <p className="ap12-artist">{artist}</p>
        </div>

        <div className="ap12-time">
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
      </div>

      <div className="ap12-progress">
        <div
          className="ap12-progress-fill"
          style={{ transform: `translateX(${-100 + (currentTime / duration) * 100}%)` }}
        ></div>
      </div>

      <div className="ap12-controls">
        <button className="ap12-icon">
          <SkipBack size={24} />
        </button>

        <button className="ap12-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>

        <button className="ap12-icon">
          <SkipForward size={24} />
        </button>
      </div>
    </div>
  );
}

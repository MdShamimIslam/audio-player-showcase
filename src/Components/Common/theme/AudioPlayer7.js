import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer7({attributes}) {
  const {title, artist, cover, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
      <div className="ap7">
        <div className="ap7-thumb">
          <img src={cover} alt={title} className="ap7-img" />
        </div>

        <div className="ap7-body">
          <h3 className="ap7-title">{title}</h3>
          <p className="ap7-artist">{artist}</p>

          <div className="ap7-controls">
            <button className="ap7-icon">
              <SkipBack size={18} />
            </button>

            <button className="ap7-play" onClick={togglePlay}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-05" />}
            </button>

            <button className="ap7-icon">
              <SkipForward size={18} />
            </button>

            <div className="ap7-bar">
              <div
                className="ap7-bar-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>

            <span className="ap7-time">{formatTime(currentTime)}</span>
          </div>
        </div>
      </div>
  );
}

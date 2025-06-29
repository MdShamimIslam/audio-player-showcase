import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer2({attributes}) {
  const {title, artist, cover, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap2">
      <div className="ap2-body">
        <div className="ap2-cover">
          <img 
            src={cover} 
            alt={title}
            className={`ap2-img ${isPlaying ? 'spin' : ''}`} 
          />
        </div>

        <div className="ap2-info">
          <div className="ap2-top">
            <div>
              <h3 className="ap2-title">{title}</h3>
              <p className="ap2-artist">{artist}</p>
            </div>
            <span className="ap2-time">{formatTime(currentTime)}</span>
          </div>

          <div className="ap2-bar">
            <div 
              className="ap2-bar-fill" 
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          <div className="ap2-controls">
            <div className="ap2-btns">
              <button className="ap2-icon">
                <SkipBack size={16} />
              </button>
              <button className="ap2-play" onClick={togglePlay}>
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
              </button>
              <button className="ap2-icon">
                <SkipForward size={16} />
              </button>
            </div>
            <div className="ap2-vol">
              <Volume2 size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

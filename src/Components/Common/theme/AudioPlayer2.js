import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer2({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio:{url}, cover={} } = item;
  const { isForBack, isVolume, isCurrentTime } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay } = useAudio(url);

  return (
      <div className="ap2">
        <div className="ap2-cover">
          <img
            src={cover.url}
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
            {isCurrentTime && <span className="ap2-time">{formatTime(currentTime)}</span>}
          </div>

          <div className="ap2-bar">
            <div
              className="ap2-bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          <div className="ap2-controls">
            <div className="ap2-btns">
              {isForBack && <button className="ap2-icon">
                <SkipBack size={16} />
              </button>}
            
              <PlayPause {...{size:12, isPlaying, togglePlay}} />

              {isForBack && <button className="ap2-icon">
                <SkipForward size={16} />
              </button>}
            </div>
            {isVolume && <div className="ap2-vol">
              <Volume2 size={14} />
            </div>}
          </div>
        </div>
      </div>
  );
}

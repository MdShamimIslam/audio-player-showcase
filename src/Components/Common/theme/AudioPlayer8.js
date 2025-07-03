import { RefreshCw, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer8({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, isRefresh } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="ap8">
      <div className="ap8-head">
        <div>
          <h3 className="ap8-title">{title}</h3>
          <p className="ap8-artist">{artist}</p>
        </div>
        <div className="ap8-icons">
          {isRefresh && <button className="ap8-icon">
            <RefreshCw size={16} />
          </button>}
          {isVolume && <button className="ap8-icon">
            <Volume2 size={16} />
          </button>}
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
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span />}
        </div>
      </div>

      <div className="ap8-controls">
        <PlayPause {...{ size: 28, isPlaying, togglePlay }} />
      </div>
    </div>
  );
}

import { SkipBack, SkipForward, Music } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer9({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

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
        {isCurrentTime ? <span className="ap9-time">{formatTime(currentTime)}</span> : <span />}

        <div className="ap9-buttons">
          {isForBack && <button className="ap9-btn">
            <SkipBack size={18} />
          </button>}

          <PlayPause {...{ size: 16, isPlaying, togglePlay }} />

          {isForBack && <button className="ap9-btn">
            <SkipForward size={18} />
          </button>}
        </div>

        {isDurationTime ? <span className="ap9-time">{formatTime(duration)}</span> : <span />}
      </div>
    </div>
  );
}

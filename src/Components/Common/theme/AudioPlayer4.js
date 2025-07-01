import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer4({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, url } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
      <div className="ap4">
        <button className="ap4-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-05" />}
        </button>

        <div className="ap4-info">
          <div className="ap4-top">
            <h3 className="ap4-title">{title}</h3>
            <span className="ap4-time">
              {isCurrentTime && formatTime(currentTime)}
              {isCurrentTime && isDurationTime && '/'}
              {isDurationTime && formatTime(duration)}
            </span>
          </div>

          <div className="ap4-bar">
            <div
              className="ap4-bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="ap4-thumb"></div>
            </div>
          </div>
        </div>

        <div className="ap4-icons">
          {isForBack && <button className="ap4-icon">
            <SkipBack size={18} />
          </button>}
          {isForBack && <button className="ap4-icon">
            <SkipForward size={18} />
          </button>}
          {isVolume && <button className="ap4-icon">
            <Volume2 size={18} />
          </button>}
        </div>
      </div>
  );
}

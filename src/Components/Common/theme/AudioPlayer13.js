import { Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer13({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="ap13">
      <div className="ap13-header">
        <div className="ap13-thumb">
          <img
            src={cover.url}
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
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
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
        {isForBack && <button className="ap13-icon">
          <SkipBack size={16} />
        </button>}

        <PlayPause {...{ size: 14, isPlaying, togglePlay }} />

        {isForBack && <button className="ap13-icon">
          <SkipForward size={16} />
        </button>}

        {isVolume ? <button className="ap13-icon">
          <Volume2 size={16} />
        </button> : <span />}
      </div>
    </div>
  );
}

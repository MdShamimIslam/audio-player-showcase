import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer10({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

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
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span />}
        </div>

        <div className="ap10-progress">
          <div
            className="ap10-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="ap10-controls">
          {isVolume ? <button className="ap10-icon">
            <Volume2 size={20} />
          </button> : <span />}

          <div className="ap10-main">
            {isForBack && <button className="ap10-icon">
              <SkipBack size={20} />
            </button>}

            <PlayPause {...{ size: 20, isPlaying, togglePlay }} />

            {isForBack && <button className="ap10-icon">
              <SkipForward size={20} />
            </button>}
          </div>

          <div className="ap10-spacer" />
        </div>
      </div>
    </div>
  );
}

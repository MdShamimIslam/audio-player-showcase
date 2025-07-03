import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer12({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="ap12">
      <div className="ap12-head">
        <div>
          <h3 className="ap12-title">{title}</h3>
          <p className="ap12-artist">{artist}</p>
        </div>

        {(isCurrentTime || isDurationTime) && <div className="ap12-time">
          <span>
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
          </span>
          
        </div>}
      </div>

      <div className="ap12-progress">
        <div
          className="ap12-progress-fill"
          style={{ transform: `translateX(${-100 + (currentTime / duration) * 100}%)` }}
        ></div>
      </div>

      <div className="ap12-controls">
        {isForBack && <button className="ap12-icon">
          <SkipBack size={24} />
        </button>}

        <PlayPause {...{ size: 24, isPlaying, togglePlay }} />

        {isForBack && <button className="ap12-icon">
          <SkipForward size={24} />
        </button>}
      </div>
    </div>
  );
}

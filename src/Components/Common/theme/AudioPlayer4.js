import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer4({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, audio:{url} } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const {isPlaying ,togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
      <div className="player4 audioPlayer">
        <PlayPause {...{size:18, isPlaying, togglePlay}} />

        <div className="info">
          <div className="top">
            <h3 className="title">{title}</h3>
            <span className="time">
              {isCurrentTime && formatTime(currentTime)}
              {isCurrentTime && isDurationTime && '/'}
              {isDurationTime && formatTime(duration)}
            </span>
          </div>

          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="thumb"></div>
            </div>
          </div>
        </div>

        <div className="controls">
          {isForBack && <button className="btn">
            <SkipBack size={18} />
          </button>}
          {isForBack && <button className="btn">
            <SkipForward size={18} />
          </button>}
          {isVolume && <button className="btn">
            <Volume2 size={18} />
          </button>}
        </div>
      </div>
  );
}

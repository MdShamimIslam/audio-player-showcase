import { SkipBack, SkipForward, Music } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer9({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player9 audioPlayer">
      <div className="head">
        <div className="icon">
          <Music size={18} />
        </div>
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
      </div>

      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="controls">
        {isCurrentTime ? <span className="time">{formatTime(currentTime)}</span> : <span />}

        <div className="buttons">
          {isForBack && <button className="btn">
            <SkipBack size={18} />
          </button>}

          <PlayPause {...{ size: 16, isPlaying, togglePlay }} />

          {isForBack && <button className="btn">
            <SkipForward size={18} />
          </button>}
        </div>

        {isDurationTime ? <span className="time">{formatTime(duration)}</span> : <span />}
      </div>
    </div>
  );
}

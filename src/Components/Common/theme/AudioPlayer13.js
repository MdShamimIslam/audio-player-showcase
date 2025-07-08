import { Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer13({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player13 audioPlayer">
      <div className="header">
        <div className="cover">
          <img
            src={cover.url}
            alt={title}
            className="img"
          />
          <div className={`overlay ${isPlaying ? 'show' : ''}`}>
            <div className="overlay-icon">
              <Pause size={12} className="pause-icon" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
          <div className="time">
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="bar-wrap">
        <div className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn">
          <SkipBack size={16} />
        </button>}

        <PlayPause {...{ size: 14, isPlaying, togglePlay }} />

        {isForBack && <button className="btn">
          <SkipForward size={16} />
        </button>}

        {isVolume ? <button className="btn">
          <Volume2 size={16} />
        </button> : <span />}
      </div>
    </div>
  );
}

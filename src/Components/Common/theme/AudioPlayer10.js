import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer10({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player10 audioPlayer">
      <div className="banner">
        <div className="overlay"></div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
      </div>

      <div className="body">
        <div className="time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span />}
        </div>

        <div className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="controls">
          {isVolume ? <button className="btn">
            <Volume2 size={20} />
          </button> : <span />}

          <div className="main">
            {isForBack && <button className="btn">
              <SkipBack size={20} />
            </button>}

            <PlayPause {...{ size: 20, isPlaying, togglePlay }} />

            {isForBack && <button className="btn">
              <SkipForward size={20} />
            </button>}
          </div>

          <div className="spacer" />
        </div>
      </div>
    </div>
  );
}

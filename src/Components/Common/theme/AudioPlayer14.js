import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer14({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player14 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        <div className="cover">
          <img src={cover?.url} alt={title} className="img" />
        </div>
      </div>

      <div className="wavebar">
        <div className="wavebar-top">
          <div className="wave">
            {Array(10).fill(0).map((_, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  height: `${4 + Math.random() * 16}px`,
                  backgroundColor: i / 10 < currentTime / duration ? '#22D3EE' : '#4B5563'
                }}
              ></div>
            ))}
          </div>
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
          ></div>
        </div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn">
          <SkipBack size={22} />
        </button>}

        <PlayPause {...{ size: 24, isPlaying, togglePlay }} />

        {isForBack && <button className="btn">
          <SkipForward size={22} />
        </button>}

        {isVolume ? <button className="btn">
          <Volume2 size={22} />
        </button> : <span />}
      </div>
    </div>
  );
}

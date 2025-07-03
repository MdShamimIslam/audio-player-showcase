import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer14({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="ap14">
      <div className="ap14-top">
        <div>
          <h3 className="ap14-title">{title}</h3>
          <p className="ap14-artist">{artist}</p>
        </div>

        <div className="ap14-cover">
          <img src={cover?.url} alt={title} className="ap14-cover-img" />
        </div>
      </div>

      <div className="ap14-wavebar">
        <div className="ap14-wavebar-top">
          <div className="ap14-wave">
            {Array(10).fill(0).map((_, i) => (
              <div
                key={i}
                className="ap14-wave-bar"
                style={{
                  height: `${4 + Math.random() * 16}px`,
                  backgroundColor: i / 10 < currentTime / duration ? '#22D3EE' : '#4B5563'
                }}
              ></div>
            ))}
          </div>
          <span className="ap14-time">
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
          </span>
        </div>

        <div className="ap14-progress">
          <div
            className="ap14-progress-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="ap14-controls">
        {isForBack && <button className="ap14-btn">
          <SkipBack size={22} />
        </button>}

        <PlayPause {...{ size: 24, isPlaying, togglePlay }} />

        {isForBack && <button className="ap14-btn">
          <SkipForward size={22} />
        </button>}

        {isVolume ? <button className="ap14-btn">
          <Volume2 size={22} />
        </button> : <span />}
      </div>
    </div>
  );
}

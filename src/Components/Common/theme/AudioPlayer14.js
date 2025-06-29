import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer14({attributes}) {
  const {title, artist, cover, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap14">
      <div className="ap14-top">
        <div>
          <h3 className="ap14-title">{title}</h3>
          <p className="ap14-artist">{artist}</p>
        </div>

        <div className="ap14-cover">
          <img src={cover} alt={title} className="ap14-cover-img" />
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
          <span className="ap14-time">{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>

        <div className="ap14-progress">
          <div
            className="ap14-progress-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="ap14-controls">
        <button className="ap14-btn">
          <SkipBack size={22} />
        </button>

        <button className="ap14-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>

        <button className="ap14-btn">
          <SkipForward size={22} />
        </button>

        <button className="ap14-btn">
          <Volume2 size={22} />
        </button>
      </div>
    </div>
  );
}

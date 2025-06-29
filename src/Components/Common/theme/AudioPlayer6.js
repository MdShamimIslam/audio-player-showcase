import { Play, Pause, Volume2, Heart } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer1({attributes}) {
  
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  return (
    <div className="ap6">
      <div className="ap6-box">
        <div className="ap6-head">
          <div>
            <h3 className="ap6-title">{title}</h3>
            <p className="ap6-artist">{artist}</p>
          </div>
          <button className="ap6-heart">
            <Heart size={18} />
          </button>
        </div>

        <div className="ap6-progress">
          <div className="ap6-track">
            <div
              className="ap6-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <div
              className="ap6-thumb"
              style={{ left: `${(currentTime / duration) * 100}%`, top: '50%' }}
            ></div>
          </div>

          <div className="ap6-time">
            <span>{formatTime(currentTime)}</span>
            <span>-{formatTime(duration - currentTime)}</span>
          </div>
        </div>

        <div className="ap6-controls">
          <div className="ap6-vol">
            <Volume2 size={16} />
          </div>
          <button className="ap6-play" onClick={togglePlay}>
            {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
          </button>
          <div className="ap6-speed">1.0x</div>
        </div>
      </div>
    </div>
  );
}

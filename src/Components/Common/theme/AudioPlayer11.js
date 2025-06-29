import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';

export default function AudioPlayer11({attributes}) {
  const {title, artist, url} = attributes.item || {};
  const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="ap11">
      <div className="ap11-top">
        <button className="ap11-play" onClick={togglePlay}>
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-05" />}
        </button>

        <div>
          <h3 className="ap11-title">{title}</h3>
          <p className="ap11-artist">{artist}</p>
        </div>
      </div>

      <div className="ap11-progress">
        <span className="ap11-time">{formatTime(currentTime)}</span>
        <div className="ap11-bar">
          <div
            className="ap11-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <span className="ap11-time">{formatTime(duration)}</span>
      </div>

      <div className="ap11-bottom">
        <div className="ap11-bars">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="ap11-bar-line"
              style={{ height: 10 + Math.random() * 10 }}
            ></div>
          ))}
        </div>

        <button className="ap11-mute" onClick={toggleMute}>
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  );
}

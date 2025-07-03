import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer11({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="ap11">
      <div className="ap11-top">

      <PlayPause {...{size:18, isPlaying, togglePlay}} />

        <div>
          <h3 className="ap11-title">{title}</h3>
          <p className="ap11-artist">{artist}</p>
        </div>
      </div>

      <div className="ap11-progress">
       {isCurrentTime ? <span className="ap11-time">{formatTime(currentTime)}</span> : <span/>}
        <div className="ap11-bar">
          <div
            className="ap11-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
       {isDurationTime ? <span className="ap11-time">{formatTime(duration)}</span> : <span/>}
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

       {isVolume ? <button className="ap11-mute" onClick={toggleMute}>
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button> : <span/> }
      </div>
    </div>
  );
}

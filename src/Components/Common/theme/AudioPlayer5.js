import  { Play, Pause, SkipBack, SkipForward, Volume1 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';


export default function AudioPlayer5({attributes}) {
  const {title, artist, url} = attributes.item || {};
    const { isPlaying, currentTime, duration, togglePlay, formatTime } = useAudio(url);

  const generateWaveform = () => {
    return Array(50).fill(0).map(() => Math.random() * 30 + 5);
  };

  const waveform = generateWaveform();

  return (
    <div className="player">
      <div className="head">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <div className="badge">PLAYING</div>
      </div>

      <div className="waveform">
        {waveform.map((height, i) => (
          <div
            key={i}
            className="bar"
            style={{
              height: `${height}px`,
              opacity: i / waveform.length < currentTime / duration ? 1 : 0.3,
              backgroundColor: i / waveform.length < currentTime / duration ? '#10B981' : '#6B7280',
            }}
          ></div>
        ))}
      </div>

      <div className="controls">
        <div className="time">{formatTime(currentTime)}</div>

        <div className="btns">
          <button className="icon-btn">
            <SkipBack size={20} />
          </button>
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>
          <button className="icon-btn">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="vol">
          <Volume1 size={18} />
        </div>
      </div>
    </div>
  );
}
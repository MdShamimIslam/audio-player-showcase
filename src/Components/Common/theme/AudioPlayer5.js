import { SkipBack, SkipForward, Volume1 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';


export default function AudioPlayer5({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isBadge, } = showcaseElements
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  const generateWaveform = () => {
    return Array(50).fill(0).map(() => Math.random() * 30 + 5);
  };

  const waveform = generateWaveform();

  return (
    <div className="player5 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        {isBadge && <div className="badge"> {isPlaying ? 'PLAYING' : 'PAUSE'} </div>}
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
        {isCurrentTime && <div className="time">{formatTime(currentTime)}</div>}

        <div className="btns">
          {isForBack && <button className="btn">
            <SkipBack size={20} />
          </button>}

          <PlayPause {...{ size: 20, isPlaying, togglePlay }} />

          {isForBack && <button className="btn">
            <SkipForward size={20} />
          </button>}
        </div>

        {isVolume ? <div className="vol">
          <Volume1 size={18} />
        </div> : <div/>}
      </div>
    </div>
  );
}
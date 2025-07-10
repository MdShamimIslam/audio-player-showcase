import { RefreshCw, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer8({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, isRefresh } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, restart, progressRef, handleProgressClick } = useAudio(url);

  return (
    <div className="player8 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <div className="icons">
          {isRefresh && <button onClick={restart} className="btn">
            <RefreshCw size={16} />
          </button>}
          {isVolume && <button className="btn" onClick={toggleMute}>
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
          </button>}
        </div>
      </div>

      <div className="progress">
        <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <div
            className="thumb"
            style={{
              left: `calc(${(currentTime / duration) * 100}% - 8px)`,
              top: '50%',
            }}
          ></div>
        </div>
        <div className="time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span />}
        </div>
      </div>

      <div className="controls">
        <PlayPause {...{ isPlaying, togglePlay }} />
      </div>
    </div>
  );
}

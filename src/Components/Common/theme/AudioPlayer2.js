import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer2({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio:{url}, cover={}, skipTime } = item;
  const { isForBack, isVolume, isCurrentTime } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay, toggleMute, isMuted, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);

  return (
      <div className="player2 audioPlayer">
        <div className="cover">
          <img
            src={cover.url}
            alt={title}
            className={`img ${isPlaying ? 'spin' : ''}`}
          />
        </div>

        <div className="info">
          <div className="top">
            <div>
              <h3 className="title">{title}</h3>
              <p className="artist">{artist}</p>
            </div>
            {isCurrentTime && <span className="time">{formatTime(currentTime)}</span>}
          </div>

          <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          <div className="controls">
            <div className="btns">
              {isForBack && <button onClick={skipBackward} className="btn">
                <SkipBack className='forbackIcn' />
              </button>}
            
              <PlayPause {...{ isPlaying, togglePlay}} />

              {isForBack && <button onClick={skipForward} className="btn">
                <SkipForward className='forbackIcn' />
              </button>}
            </div>
            {isVolume && <div className="vol" onClick={toggleMute}>
              {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
            </div>}
          </div>
        </div>
      </div>
  );
}

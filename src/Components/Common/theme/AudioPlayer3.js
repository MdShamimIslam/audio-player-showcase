import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer3({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio:{url},skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay, toggleMute, isMuted, volBarRef, handleVolumeChange, volume, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);


  return (
    <div className="player3 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <div className="status">
          {isPlaying ? (
            <div className="wave">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bar"></div>
              ))}
            </div>
          ) : (
            <> {isDurationTime ? <span className="duration">{formatTime(duration)}</span> : <span></span>} </>
          )}
        </div>
      </div>

      <div className="progress">
        <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span></span>}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span></span>}

        </div>
      </div>

      <div className="controls">
        {isForBack && <button onClick={skipBackward} className="btn">
          <SkipBack className='forbackIcn' />
        </button>}
       
         <PlayPause {...{ isPlaying, togglePlay}} />
        
        {isForBack && <button onClick={skipForward} className="btn">
          <SkipForward className='forbackIcn' />
        </button>}

        {isVolume && <div className="vol">
          <div onClick={toggleMute}>
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
          </div>

          <div
            ref={volBarRef}
            className="vol-track"
            onClick={handleVolumeChange}
          >
            <div className="vol-fill" style={{ width: `${volume * 100}%` }}></div>
          </div>

        </div>}
      </div>
    </div>
  );
}

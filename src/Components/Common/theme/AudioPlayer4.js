import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer4({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, audio:{url},skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const {isPlaying ,togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, skipBackward, skipForward, progressRef, handleProgressClick  } = useAudio(url,skipTime);

  return (
      <div className="player4 audioPlayer">
        <PlayPause {...{size:18, isPlaying, togglePlay}} />

        <div className="info">
          <div className="top">
            <h3 className="title">{title}</h3>
            <span className="time">
              {isCurrentTime && formatTime(currentTime)}
              {isCurrentTime && isDurationTime && '/'}
              {isDurationTime && formatTime(duration)}
            </span>
          </div>

          <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div className="thumb"></div>
            </div>
          </div>
        </div>

        <div className="controls">
          {isForBack && <button onClick={skipBackward} className="btn">
            <SkipBack className='forbackIcn' />
          </button>}
          {isForBack && <button onClick={skipForward} className="btn">
            <SkipForward className='forbackIcn' />
          </button>}
          {isVolume && <button className="btn" onClick={toggleMute} >
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
          </button>}
        </div>
      </div>
  );
}

import { Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer13({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url }, skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url, skipTime);

  return (
    <div className="player13 audioPlayer">
      <div className="header">
        <div className="cover">
          <img
            src={cover.url}
            alt={title}
            className="img"
          />
          <div className={`overlay ${isPlaying ? 'show' : ''}`}>
            <div className="overlay-icon">
              <Pause size={12} className="pause-icon" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
          <div className="time">
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="bar-wrap">
        <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="controls">
        {isForBack && <button onClick={skipBackward} className="btn">
          <SkipBack className='forbackIcn' />
        </button>}

        <PlayPause {...{ isPlaying, togglePlay }} />

        {isForBack && <button onClick={skipForward} className="btn">
          <SkipForward className='forbackIcn' />
        </button>}

        {isVolume ? <button className="btn" onClick={toggleMute}>
          {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
        </button> : <span />}
      </div>
    </div>
  );
}

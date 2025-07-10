import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer10({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url }, skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);

  return (
    <div className="player10 audioPlayer">
      <div className="banner">
        <div className="overlay"></div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
      </div>

      <div className="body">
        <div className="time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span />}
        </div>

        <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        <div className="controls">
          {isVolume ? <button className="btn" onClick={toggleMute}>
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
          </button> : <span />}

          <div className="main">
            {isForBack && <button onClick={skipBackward} className="btn">
              <SkipBack className='forbackIcn' />
            </button>}

            <PlayPause {...{ isPlaying, togglePlay }} />

            {isForBack && <button onClick={skipForward} className="btn">
              <SkipForward className='forbackIcn' />
            </button>}
          </div>

          <div className="spacer" />
        </div>
      </div>
    </div>
  );
}

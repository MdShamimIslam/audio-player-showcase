import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url }, skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime } = showcaseElements;
  const { currentTime, duration, formatTime, isPlaying, togglePlay, toggleMute, isMuted, volume, volBarRef, handleVolumeChange, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);


  return (
    <div className="player1 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <span className="time">
          {isCurrentTime && formatTime(currentTime)}
          {isCurrentTime && isDurationTime && '/'}
          {isDurationTime && formatTime(duration)}
        </span>
      </div>

      <div className="bar-wrap">
        <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
          <div className="bar-fill" style={{ width: `${(currentTime / duration) * 100}%` }} ></div>
        </div>
      </div>

      <div className="controls">
        {isForBack && <button onClick={skipBackward} className="btn"> <SkipBack className='forbackIcn' /> </button>}

        <PlayPause {...{ isPlaying, togglePlay }} />

        {isForBack && <button  onClick={skipForward} className="btn"> <SkipForward className='forbackIcn' /> </button>}

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

import { SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer14({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url }, skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url, skipTime);

  return (
    <div className="player14 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        <div className="cover">
          <img src={cover?.url} alt={title} className="img" />
        </div>
      </div>

      <div className="wavebar">
        <div className="wavebar-top">
          <div className="wave">
            {Array(10).fill(0).map((_, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  height: `${4 + Math.random() * 16}px`,
                  backgroundColor: i / 10 < currentTime / duration ? '#22D3EE' : '#4B5563'
                }}
              ></div>
            ))}
          </div>
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

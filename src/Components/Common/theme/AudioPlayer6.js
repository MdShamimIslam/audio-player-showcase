import { Volume2, Heart, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, isHeart, isPlaybackSpeed } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, playbackRate, changePlaybackRate, progressRef, handleProgressClick } = useAudio(url);

  return (
    <div className="player6 audioPlayer">
      <div className="info6">
        <div className="top">
          <div>
            <h3 className="title">{title}</h3>
            <p className="artist">{artist}</p>
          </div>
          {isHeart && <button className="heart">
            <Heart size={18} />
          </button>}
        </div>

        <div className="progress">
          <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
            <div className="bar-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            <div className="thumb" style={{ left: `${(currentTime / duration) * 100}%`, top: '50%' }}></div>
          </div>

          <div className="time">
            {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
            {isDurationTime ? <span>-{formatTime(duration - currentTime)}</span> : <span />}
          </div>
        </div>

        <div className="controls">
          {isVolume ? <div className="vol" onClick={toggleMute}>
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume2 className='volumeIcn' />}
          </div> : <div />}

          <PlayPause {...{ isPlaying, togglePlay }} />

          {isPlaybackSpeed ? (
            <div className="speed-dropdown">
              <button className="speed-button">{playbackRate.toFixed(1)}x</button>
              <div className="speed-options">
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                  <div
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className="speed-option"
                  >
                    {rate}x
                  </div>
                ))}
              </div>
            </div>
          ) : <div />}

        </div>
      </div>
    </div>
  );
}

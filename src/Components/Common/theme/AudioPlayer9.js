import { SkipBack, SkipForward, Music } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer9({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url },skipTime } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);

  return (
    <div className="player9 audioPlayer">
      <div className="head">
        <div className="icon">
          <Music size={18} />
        </div>
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
      </div>

      <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
        <div
          className="bar-fill"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="controls">
        {isCurrentTime ? <span className="time">{formatTime(currentTime)}</span> : <span />}

        <div className="buttons">
          {isForBack && <button onClick={skipBackward} className="btn">
            <SkipBack className='forbackIcn' />
          </button>}

          <PlayPause {...{ isPlaying, togglePlay }} />

          {isForBack && <button onClick={skipForward} className="btn">
            <SkipForward className='forbackIcn' />
          </button>}
        </div>

        {isDurationTime ? <span className="time">{formatTime(duration)}</span> : <span />}
      </div>
    </div>
  );
}

import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer12({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url }, skipTime } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url, skipTime);

  return (
    <div className="player12 audioPlayer">
      <div className="head">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        {(isCurrentTime || isDurationTime) && <div className="time">
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
        </div>}
      </div>

      <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
        <div
          className="bar-fill"
          style={{ transform: `translateX(${-100 + (currentTime / duration) * 100}%)` }}
        ></div>
      </div>

      <div className="controls">
        {isForBack && <button onClick={skipBackward} className="btn">
          <SkipBack className='forbackIcn' />
        </button>}

        <PlayPause {...{ isPlaying, togglePlay }} />

        {isForBack && <button onClick={skipForward} className="btn">
          <SkipForward className='forbackIcn' />
        </button>}
      </div>
    </div>
  );
}

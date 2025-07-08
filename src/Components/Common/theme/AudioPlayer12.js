import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer12({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player12 audioPlayer">
      <div className="head">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        {(isCurrentTime || isDurationTime) && <div className="time">
          {/* <span> */}
            {isCurrentTime && formatTime(currentTime)}
            {isCurrentTime && isDurationTime && '/'}
            {isDurationTime && formatTime(duration)}
          {/* </span> */}
          
        </div>}
      </div>

      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{ transform: `translateX(${-100 + (currentTime / duration) * 100}%)` }}
        ></div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn">
          <SkipBack size={24} />
        </button>}

        <PlayPause {...{ size: 24, isPlaying, togglePlay }} />

        {isForBack && <button className="btn">
          <SkipForward size={24} />
        </button>}
      </div>
    </div>
  );
}

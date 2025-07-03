import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer15({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);  

  return (
    <div className="ap15">
      <div className="ap15-head">
        <div>
          <h3 className="ap15-title">{title}</h3>
          <p className="ap15-artist">{artist}</p>
        </div>
        <div className={`ap15-cover ${isPlaying ? 'spin' : ''}`}>
          <img src={cover?.url} alt={title} className="ap15-img" />
        </div>
      </div>

      <div className="ap15-progressbox">
        <div className="ap15-bar-wrap">
          <div
            className="ap15-bar"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="ap15-time">
         {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span/> }
         {isDurationTime ? <span>{formatTime(duration)}</span> : <span/> }
        </div>
      </div>

      <div className="ap15-controls">
        {isForBack && <button className="ap15-btn">
          <SkipBack size={30} />
        </button>}

        <PlayPause {...{size:30, isPlaying, togglePlay}} />

       {isForBack && <button className="ap15-btn">
          <SkipForward size={30} />
        </button> }
      </div>
    </div>
  );
}

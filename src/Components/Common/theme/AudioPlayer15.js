import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer15({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio: { url } } = item;
  const { isForBack, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);  

  return (
    <div className="player15 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <div className={`cover ${isPlaying ? 'spin' : ''}`}>
          <img src={cover?.url} alt={title} className="img" />
        </div>
      </div>

      <div className="progressbox">
        <div className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="time">
         {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span/> }
         {isDurationTime ? <span>{formatTime(duration)}</span> : <span/> }
        </div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn">
          <SkipBack size={30} />
        </button>}

        <PlayPause {...{size:30, isPlaying, togglePlay}} />

       {isForBack && <button className="btn">
          <SkipForward size={30} />
        </button> }
      </div>
    </div>
  );
}

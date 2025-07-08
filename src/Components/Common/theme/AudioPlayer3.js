import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer3({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio:{url} } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay } = useAudio(url);

  return (
    <div className="player3 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <div className="status">
          {isPlaying ? (
            <div className="wave">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bar"></div>
              ))}
            </div>
          ) : (
            <> {isDurationTime ? <span className="duration">{formatTime(duration)}</span> : <span></span>} </>
          )}
        </div>
      </div>

      <div className="progress">
        <div className="bar-bg">
          <div
            className="bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span></span>}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span></span>}

        </div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn">
          <SkipBack size={20} />
        </button>}
       
         <PlayPause {...{size:20, isPlaying, togglePlay}} />
        
        {isForBack && <button className="btn">
          <SkipForward size={20} />
        </button>}
        {isVolume && <div className="vol">
          <Volume2 size={16} className="vol-icon" />
          <div className="vol-track">
            <div className="vol-fill"></div>
          </div>
        </div>}
      </div>
    </div>
  );
}

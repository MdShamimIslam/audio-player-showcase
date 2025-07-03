import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer3({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio:{url} } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay } = useAudio(url);

  return (
    <div className="ap3">
      <div className="ap3-top">
        <div>
          <h3 className="ap3-title">{title}</h3>
          <p className="ap3-artist">{artist}</p>
        </div>
        <div className="ap3-status">
          {isPlaying ? (
            <div className="ap3-wave">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="ap3-bar"></div>
              ))}
            </div>
          ) : (
            <> {isDurationTime ? <span className="ap3-duration">{formatTime(duration)}</span> : <span></span>} </>
          )}
        </div>
      </div>

      <div className="ap3-progress">
        <div className="ap3-track">
          <div
            className="ap3-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        <div className="ap3-time">
          {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span></span>}
          {isDurationTime ? <span>{formatTime(duration)}</span> : <span></span>}

        </div>
      </div>

      <div className="ap3-controls">
        {isForBack && <button className="ap3-icon">
          <SkipBack size={20} />
        </button>}
       
         <PlayPause {...{size:20, isPlaying, togglePlay}} />
        
        {isForBack && <button className="ap3-icon">
          <SkipForward size={20} />
        </button>}
        {isVolume && <div className="ap3-vol">
          <Volume2 size={16} className="ap3-vol-icon" />
          <div className="ap3-vol-track">
            <div className="ap3-vol-fill"></div>
          </div>
        </div>}
      </div>
    </div>
  );
}

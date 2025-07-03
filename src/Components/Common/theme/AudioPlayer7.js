import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer7({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio:{url} } = item;
  const { isForBack, isCurrentTime } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
      <div className="ap7">
        <div className="ap7-thumb">
          <img src={cover?.url} alt={title} className="ap7-img" />
        </div>

        <div className="ap7-body">
          <h3 className="ap7-title">{title}</h3>
          <p className="ap7-artist">{artist}</p>

          <div className="ap7-controls">
          {isForBack && <button className="ap7-icon">
              <SkipBack size={18} />
            </button> }  

            <PlayPause {...{size:16, isPlaying, togglePlay}} />

           {isForBack && <button className="ap7-icon">
              <SkipForward size={18} />
            </button> } 

            <div className="ap7-bar">
              <div
                className="ap7-bar-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>

          {isCurrentTime && <span className="ap7-time">{formatTime(currentTime)}</span> }  
          </div>
        </div>
      </div>
  );
}

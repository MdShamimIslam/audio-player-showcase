import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer7({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio:{url} } = item;
  const { isForBack, isCurrentTime } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
      <div className="player7 audioPlayer">
        <div className="cover">
          <img src={cover?.url} alt={title} className="img" />
        </div>

        <div className="body">
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>

          <div className="controls">
          {isForBack && <button className="btn">
              <SkipBack size={18} />
            </button> }  

            <PlayPause {...{size:16, isPlaying, togglePlay}} />

           {isForBack && <button className="btn">
              <SkipForward size={18} />
            </button> } 

            <div className="bar-bg">
              <div
                className="bar-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>

          {isCurrentTime && <span className="time">{formatTime(currentTime)}</span> }  
          </div>
        </div>
      </div>
  );
}

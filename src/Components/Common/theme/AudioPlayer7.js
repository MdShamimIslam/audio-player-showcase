import { SkipBack, SkipForward } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer7({attributes}) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, cover, audio:{url},skipTime } = item;
  const { isForBack, isCurrentTime } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime, skipBackward, skipForward, progressRef, handleProgressClick } = useAudio(url,skipTime);

  return (
      <div className="player7 audioPlayer">
        <div className="cover">
          <img src={cover?.url} alt={title} className="img" />
        </div>

        <div className="body">
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>

          <div className="controls">
          {isForBack && <button onClick={skipBackward} className="btn">
              <SkipBack className='forbackIcn' />
            </button> }  

            <PlayPause {...{ isPlaying, togglePlay}} />

           {isForBack && <button onClick={skipForward} className="btn">
              <SkipForward className='forbackIcn' />
            </button> } 

            <div ref={progressRef} onClick={handleProgressClick} className="bar-bg">
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

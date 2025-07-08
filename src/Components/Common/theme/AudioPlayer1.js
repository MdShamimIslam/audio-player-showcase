import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isForBack, isVolume, isCurrentTime, isDurationTime } = showcaseElements;
  const { currentTime, duration, formatTime, isPlaying, togglePlay } = useAudio(url);


  return (
    <div className="player1 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        <span className="time">
          {isCurrentTime && formatTime(currentTime)}
          {isCurrentTime && isDurationTime && '/'}
          {isDurationTime && formatTime(duration)}
        </span>
      </div>

      <div className="bar-wrap">
        <div className="bar-bg">
          <div className="bar-fill" style={{ width: `${(currentTime / duration) * 100}%` }} ></div>
        </div>
      </div>

      <div className="controls">
        {isForBack && <button className="btn"> <SkipBack className='lucideIcn' /> </button>}

        <PlayPause {...{ isPlaying, togglePlay }} />

        {isForBack && <button className="btn"> <SkipForward className='lucideIcn' /> </button>}

        {isVolume && <div className="vol">
          <Volume2 size={16} className="vol-icon" />
          <div className="vol-bg">
            <div className="vol-fill"></div>
          </div>
        </div>}
      </div>
    </div>
  );
}

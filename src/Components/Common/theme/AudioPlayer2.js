import { SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer2({ attributes }) {
  const { item = {}, showcaseElements = {}, style = {} } = attributes || {};
  const { size=14 } = style.controls || {};
  const { title, artist, audio:{url}, cover={} } = item;
  const { isForBack, isVolume, isCurrentTime } = showcaseElements;
  const { isPlaying, currentTime, duration, formatTime, togglePlay } = useAudio(url);

  return (
      <div className="player2 audioPlayer">
        <div className="cover">
          <img
            src={cover.url}
            alt={title}
            className={`img ${isPlaying ? 'spin' : ''}`}
          />
        </div>

        <div className="info">
          <div className="top">
            <div>
              <h3 className="title">{title}</h3>
              <p className="artist">{artist}</p>
            </div>
            {isCurrentTime && <span className="time">{formatTime(currentTime)}</span>}
          </div>

          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>

          <div className="controls">
            <div className="btns">
              {isForBack && <button className="btn">
                <SkipBack className='lucideIcn' />
              </button>}
            
              <PlayPause {...{ isPlaying, togglePlay}} />

              {isForBack && <button className="btn">
                <SkipForward className='lucideIcn' />
              </button>}
            </div>
            {isVolume && <div className="vol">
              <Volume2  />
            </div>}
          </div>
        </div>
      </div>
  );
}

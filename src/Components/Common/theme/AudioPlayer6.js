import { Volume2, Heart } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, isHeart, isPlaybackSpeed } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="player6 audioPlayer">
      <div className="info">
        <div className="top">
          <div>
            <h3 className="title">{title}</h3>
            <p className="artist">{artist}</p>
          </div>
          {isHeart && <button className="heart">
            <Heart size={18} />
          </button>}
        </div>

        <div className="progress">
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            <div className="thumb" style={{ left: `${(currentTime / duration) * 100}%`, top: '50%' }}></div>
          </div>

          <div className="time">
            {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
            {isDurationTime ? <span>-{formatTime(duration - currentTime)}</span> : <span />}
          </div>
        </div>

        <div className="controls">
          {isVolume ? <div className="vol">
            <Volume2 size={16} />
          </div> : <div />}

          <PlayPause {...{ size: 22, isPlaying, togglePlay }} />

          {isPlaybackSpeed ? <div className="speed">1.0x</div> : <div />}
        </div>
      </div>
    </div>
  );
}

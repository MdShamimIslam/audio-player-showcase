import { Volume2, Heart } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';

export default function AudioPlayer1({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url } } = item;
  const { isVolume, isCurrentTime, isDurationTime, isHeart, isPlaybackSpeed } = showcaseElements;
  const { isPlaying, togglePlay, currentTime, duration, formatTime } = useAudio(url);

  return (
    <div className="ap6">
      <div className="ap6-box">
        <div className="ap6-head">
          <div>
            <h3 className="ap6-title">{title}</h3>
            <p className="ap6-artist">{artist}</p>
          </div>
          {isHeart && <button className="ap6-heart">
            <Heart size={18} />
          </button>}
        </div>

        <div className="ap6-progress">
          <div className="ap6-track">
            <div className="ap6-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            <div className="ap6-thumb" style={{ left: `${(currentTime / duration) * 100}%`, top: '50%' }}></div>
          </div>

          <div className="ap6-time">
            {isCurrentTime ? <span>{formatTime(currentTime)}</span> : <span />}
            {isDurationTime ? <span>-{formatTime(duration - currentTime)}</span> : <span />}
          </div>
        </div>

        <div className="ap6-controls">
          {isVolume ? <div className="ap6-vol">
            <Volume2 size={16} />
          </div> : <div />}

          <PlayPause {...{ size: 22, isPlaying, togglePlay }} />

          {isPlaybackSpeed ? <div className="ap6-speed">1.0x</div> : <div />}
        </div>
      </div>
    </div>
  );
}

import { SkipBack, SkipForward, Volume1, VolumeX } from 'lucide-react';
import { useAudio } from '../../../hooks/useAudio';
import PlayPause from '../playerComponents/PlayPause';


export default function AudioPlayer5({ attributes }) {
  const { item = {}, showcaseElements = {} } = attributes || {};
  const { title, artist, audio: { url },skipTime } = item;
  const { isForBack, isVolume, isCurrentTime, isBadge, } = showcaseElements
  const { isPlaying, togglePlay, currentTime, duration, formatTime, toggleMute, isMuted, skipBackward, skipForward } = useAudio(url,skipTime);

  const generateWaveform = () => {
    return Array(50).fill(0).map(() => Math.random() * 30 + 5);
  };

  const waveform = generateWaveform();

  return (
    <div className="player5 audioPlayer">
      <div className="top">
        <div>
          <h3 className="title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>
        {isBadge && <div className="badge"> {isPlaying ? 'PLAYING' : 'PAUSE'} </div>}
      </div>

      <div className="waveform">
        {waveform.map((height, i) => (
          <div
            key={i}
            className="bar"
            style={{
              height: `${height}px`,
              opacity: i / waveform.length < currentTime / duration ? 1 : 0.3,
              backgroundColor: i / waveform.length < currentTime / duration ? '#10B981' : '#6B7280',
            }}
          ></div>
        ))}
      </div>

      <div className="controls">
        {isCurrentTime && <div className="time">{formatTime(currentTime)}</div>}

        <div className="btns">
          {isForBack && <button onClick={skipBackward} className="btn">
            <SkipBack className='forbackIcn' />
          </button>}

          <PlayPause {...{ isPlaying, togglePlay }} />

          {isForBack && <button onClick={skipForward} className="btn">
            <SkipForward className='forbackIcn' />
          </button>}
        </div>

        {isVolume ? <div className="vol" onClick={toggleMute} >
            {isMuted ? <VolumeX className='volumeIcn' /> : <Volume1 className='volumeIcn' />}
        </div> : <div/>}
      </div>
    </div>
  );
}
import { Pause, Play } from "lucide-react";

const PlayPause = ({ size, isPlaying, togglePlay }) => {

    return (
        <button className="play" onClick={togglePlay}>
            {isPlaying ? <Pause size={size} /> : <Play size={size} />}
        </button>
    )
}

export default PlayPause;

import { Pause, Play } from "lucide-react";

const PlayPause = ({ isPlaying, togglePlay }) => {

    return (
        <button className="play" onClick={togglePlay}>
            {isPlaying ? <Pause className="lucideIcn" /> : <Play className="lucideIcn" />}
        </button>
    )
}

export default PlayPause;

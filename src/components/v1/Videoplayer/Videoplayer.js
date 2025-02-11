"use client";
import ReactPlayer from "react-player";

const VideoPlayer = () => {

    return (
        <div className="video-container">
            <ReactPlayer
                url="/video.mp4"
                width="100%"
                height="100vh"
                controls={true} // Hides default controls
            />
        </div>
    );
};

export default VideoPlayer;

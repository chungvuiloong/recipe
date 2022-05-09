import React from 'react';
import ReactPlayer from 'react-player';
import video from "../Assets/Videos/heroBannerVideo.mp4";

const HeroBanner = () => {
    return (
        <div className="video-container">
            <ReactPlayer
                url={video}
                playing
                loop
                muted
                cover
                height
                width
                className="heroBannerVideo"
            />
        </div>
    );
};

export default HeroBanner;
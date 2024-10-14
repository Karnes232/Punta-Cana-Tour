import React from "react";
import ReactPlayer from "react-player/lazy";
const Video = ({ url }) => {
  return (
    <div className="mt-3 h-[35vh] md:h-[45vh] lg:h-[65vh] w-full max-w-7xl 2xl:max-w-6xl mx-0 xl:mx-auto ">
      <ReactPlayer
        url={url}
        muted
        controls
        playing={true}
        loop
        width="100%"
        height="100%"
        pip
      />
    </div>
  );
};

export default Video;

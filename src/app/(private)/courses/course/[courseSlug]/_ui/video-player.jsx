import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="flex rounded-lg h-full border-2 border-border overflow-hidden">
      <ReactPlayer
        url={url}
        width="100%"
        height={600}
        controls={true}
      />
    </div>

  );
};

export default VideoPlayer;
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <div className="col-md-4 list-group">
      <ul>
        { videoItems }
      </ul>
    </div>
  );
};

export default VideoList;
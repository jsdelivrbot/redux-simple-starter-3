import React from 'react';

const VideoList = (props) => {
  return (
    <div className="col-md-4 list-group">
      <ul>
        { props.videos.length }
      </ul>
    </div>
  );
};

export default VideoList;
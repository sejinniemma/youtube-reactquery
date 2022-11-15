import React from 'react';

export default function VideoCard({ video }) {
  console.log(video);
  return <div>{video.snippet.title}</div>;
}

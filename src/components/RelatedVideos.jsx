import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function RelatedVideos({ id }) {
  const youtube = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => {
    return youtube.relatedVideos(id);
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😱</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';
const Video = (props) => {
  let params = useParams();
  return <h2>query: {params.query}</h2>;
};
export default Video;

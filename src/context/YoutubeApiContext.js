import React, { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/FakeYoutubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();
const youtubeClient = new YoutubeClient();
const youtube = new Youtube(youtubeClient);

export function YoutubeProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={youtube}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

import React, { useState } from 'react';
import { youtubeService } from '../services/youtube';
import { SearchResults } from '../cmps/searchResult';
import { PlayingVideo } from '../cmps/PlayingVideo';


export const HomePage = () => {
  const [value, setValue] = useState('');
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const onHandleSong = ({ target }) => {
    const tValue = target.value;
    setValue(tValue);
  };

  const onHandleSubmit = async (ev) => {
    ev.preventDefault();
    var form = document.getElementsByName('search-form')[0];
    const result = await youtubeService.getResultYoutube(value);
    const newArray = [];
    result.items.forEach((videoDetails) => {
      const videoObj = {
        videoId: videoDetails.id.videoId,
        description: videoDetails.snippet.description,
        title: videoDetails.snippet.title,
        thumbnailDefault: videoDetails.snippet.thumbnails.default.url,
        thumbnailHigh: videoDetails.snippet.thumbnails.high.url,
      };
      return newArray.push(videoObj);
    });
    setSearchedVideos(newArray);
    form.reset();
  };

  return (
    <React.Fragment>
      <form
        name='search-form'
        onSubmit={onHandleSubmit}
        className='search-form'>
        <input
          type='text'
          placeholder='Search on youtube...'
          onChange={(ev) => onHandleSong(ev)}
        />
        <button>Search</button>
      </form>
      <section className='main-container flex space-between'>
        <SearchResults searchedVideos={searchedVideos} setSelectedVideo={setSelectedVideo} />
        <PlayingVideo selectedVideo={selectedVideo} />
        <div className='playing-result'></div>
      </section>
    </React.Fragment>
  );
};

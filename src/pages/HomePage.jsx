import React, { useState } from 'react';
import { youtubeService } from '../services/youtube';
import { SearchResults } from '../cmps/searchResult';
import { PlayingVideo } from '../cmps/PlayingVideo';


export const HomePage = () => {
  const [value, setValue] = useState('');
  const [searchedVideos, setSearchedVideos] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const onHandleSong = ({ target }) => {
    const tValue = target.value;
    setValue(tValue);
  };

  const onHandleSubmit = async (ev) => {
    ev.preventDefault();
    var form = document.getElementsByName('search-form')[0];
    const result = await youtubeService.getResultYoutube(value);
    setSearchedVideos(result);
    form.reset();
  };

  return (
    <React.Fragment>
      <form
        name='search-form'
        onSubmit={onHandleSubmit}
        className='search-form flex column justify-center align-items'>
        <input
          type='text'
          placeholder='Search on youtube...'
          onChange={(ev) => onHandleSong(ev)}
        />
        <button>Search</button>
      </form>
      <section className='main-container flex justify-center'>
        <PlayingVideo searchedVideos={searchedVideos} selectedVideo={selectedVideo} />
        <SearchResults selectedVideo={selectedVideo} searchedVideos={searchedVideos} setSelectedVideo={setSelectedVideo} />
      </section>
    </React.Fragment>
  );
};

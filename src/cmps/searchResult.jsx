import React from 'react';

export const SearchResults = ({ searchedVideos, setSelectedVideo }) => {


    if (!searchedVideos.length) return (<></>)
  return (
    <React.Fragment>
      <div className='search-results flex column'>
        {searchedVideos.map((res) => {
          return (
            <section onClick={() => setSelectedVideo({id: res.videoId, desc: res.description})} className='single-preview'>
              <img src={res.thumbnailDefault} alt='res1' />
              
            </section>
          );
        })}
      </div>
    </React.Fragment>
  );
};

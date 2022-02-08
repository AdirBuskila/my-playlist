import React from 'react';

export const SearchResults = ({ searchedVideos, setSelectedVideo, selectedVideo }) => {


    if (!searchedVideos.length) return (<></>)
    const searchClassName = (selectedVideo) ? 'search-results grid-2' : 'search-results grid'
  return (
    <React.Fragment>
      <div className={searchClassName}>
        {searchedVideos.map((res, index) => {
          console.log(index);
          if ( selectedVideo && index >= 8 ) return
          return (
            <section onClick={() => setSelectedVideo({id: res.videoId, desc: res.description})} className='single-preview flex'>
              <div className="img-container pointer">
              <img src={res.thumbnailDefault} alt='res1' />
                <p>{res.title}</p>
              </div>
            </section>
          );
        })}
      </div>
    </React.Fragment>
  );
};

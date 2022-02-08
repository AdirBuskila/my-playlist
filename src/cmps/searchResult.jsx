import React from 'react';

export const SearchResults = ({ searchedVideos, setSelectedVideo, selectedVideo }) => {


    if (!searchedVideos.length) return (<></>)
    // const searchClassName = (selectedVideo) ? 'flex column' :
  return (
    <React.Fragment>
      <div className='search-results'>
        {searchedVideos.map((res, index) => {
          console.log(index);
          if ( selectedVideo && index >= 5 ) return
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

import React from 'react';

export const SearchResults = ({ searchedVideos, setSelectedVideo, selectedVideo }) => {

  if (!searchedVideos) return (<></>)
  const className = (!selectedVideo) ? 'search-results grid' : 'search-results flex column';
  return (
    <React.Fragment>
      <div className={className}>
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



export const PlayingVideo = ({selectedVideo, searchedVideos}) => {
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}`;
    if (!searchedVideos){
        return (
        <div className="playing-video start flex">
        <h2>Welcome to your music app.</h2>
        <p>Type in your favourite song / artist and let the show begin.</p>
        </div>
        
    )} else if (!selectedVideo) {
        return <></>
    } else 
    return (
        <section className="playing-video">
            {<iframe src={videoSrc} allowFullScreen className="video" ></iframe>}
            <p className="playing-video-description">{selectedVideo.description}</p>
        </section>
    )
}
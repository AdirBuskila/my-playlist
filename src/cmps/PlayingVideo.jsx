

export const PlayingVideo = ({selectedVideo, searchedVideos}) => {
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}`;
    if (!searchedVideos){
        return (
        <div className="playing-video start flex">
        <h1>Welcome To </h1>
        <h1> My Youtube!</h1>
        <h2>a Youtube based app for your pleasure</h2>
        <h2> Search for any video you'd like!</h2>
        <h2>Feel free to check the code at 'github link'</h2>
        <img className="home-page-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" />
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
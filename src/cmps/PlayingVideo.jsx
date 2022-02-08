

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
        </div>
        
    )} else if (!selectedVideo) {
        return <></>
    } else 
    return (
        <section className="playing-video">
            {<iframe src={videoSrc} allowFullScreen className="video" ></iframe>}
        </section>
    )
}
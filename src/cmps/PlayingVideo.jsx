

export const PlayingVideo = ({selectedVideo}) => {
    console.log("selectedVideo: ", selectedVideo);

    if (!selectedVideo) return (
        <p>Please Choose a video to play</p>
    )

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}`;
    return (
        <section className="flex">
            {<iframe src={videoSrc} allowFullScreen  ></iframe>}
        </section>
    )
}
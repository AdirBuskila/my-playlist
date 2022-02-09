import axios from 'axios';
const KEY = 'AIzaSyDwDkWrKgvHApEZND0qJ3peXJhyKoBIFA4'; // mention your youtube API key here

export const youtubeService = {
    getResultYoutube,
}


async function getResultYoutube(value) {
    try {
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search/?key=${KEY}&part=snippet&maxResults=15&q=${value}`)
        console.log('data', data);
        const newArr = []
        data.items.forEach((video)=>{
            const videoObj = {
                videoId: video.id.videoId,
                description: video.snippet.description,
                title: video.snippet.title,
                thumbnailDefault: video.snippet.thumbnails.default.url,
                thumbnailHigh: video.snippet.thumbnails.high.url,
              };
              return newArr.push(videoObj);
        })
        return newArr;
    } catch (err) {
        console.log('Cannot get request', err);
    }
}

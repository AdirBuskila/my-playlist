import axios from 'axios';
const KEY = 'AIzaSyDwDkWrKgvHApEZND0qJ3peXJhyKoBIFA4'; // mention your youtube API key here

export const youtubeService = {
    getResultYoutube,
}


async function getResultYoutube(value) {
    try {
        const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search/?key=${KEY}&part=snippet&maxResults=5&q=${value}`)
        return data;
    } catch (err) {
        console.log('Cannot get request', err);
    }
}

import axios from "axios";

const unsplashKey = import.meta.env.VITE_UNSPLASH_KEYS;
const pexelKey = import.meta.env.VITE_PIXELS_KEYS;


export const fetchPhotos = async (query , page=1 , per_page=20) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query , page, per_page},
            headers: {Authorization: `Client-ID ${unsplashKey}`}
        })

        // console.log(unsplashKey)
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error occur in fetch Photos", error);
    }
}


export const fetchVideos = async (query , per_page=20) => {
    try {
        const response = await axios.get('https://api.pexels.com/v1/videos/search',{
            params: {query , per_page},
            headers: {Authorization: `Client-ID ${unsplashKey}`}
        })

        // console.log(unsplashKey)
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error occur in fetch Videos", error);
    }
}


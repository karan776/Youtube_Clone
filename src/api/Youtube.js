import axios from "axios";
const KEY = "AIzaSyAucqmKZna1Am819i6k4kINOwhtl9DLR3s"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults: 5,
        key:KEY
    }
});
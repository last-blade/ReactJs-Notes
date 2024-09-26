import axios from "axios";

/**
 Axios is a popular JavaScript library for making HTTP requests in web applications. It simplifies the process
 of sending asynchronous requests and handling responses. It is commonly used with Node. js and in browser-based
 projects and can be installed via NPM (Node Package Manager).

 command:- npm instal axios
 */

 const movieBaseUrl = "https://api.themoviedb.org/3";

 const api_key = "291f3385479bdc21fea3b33c3f0cdc91";

 const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=291f3385479bdc21fea3b33c3f0cdc91';

 const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

 export default{
    getTrendingVideos,
    getMovieByGenreId
 }    


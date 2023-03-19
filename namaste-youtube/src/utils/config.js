export const BUTTON_LIST = [
  "All",
  "Music",
  "Mixes",
  "Stocks",
  "Scene",
  "News",
  "Songs",
  "Education",
  "Favourite",
  "Comedy",
  "Computer Science",
  "Recently uploaded",
];

const API_KEY = "AIzaSyA0RRNzEkg1cKfQ_Mp-VBNEY9M6t0wO4FI";

export const API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

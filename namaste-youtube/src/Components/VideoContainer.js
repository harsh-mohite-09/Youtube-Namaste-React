import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json.items[0]);
    setVideos(json.items);
  };

  return (
    <div className="mt-5 flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

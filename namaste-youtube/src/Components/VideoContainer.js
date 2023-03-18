import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="mt-5 flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard video={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideoContainer;

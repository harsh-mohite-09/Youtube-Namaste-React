import React from "react";

const VideoCard = ({ video }) => {
  const {
    snippet,
    statistics: { viewCount },
  } = video;
  const { channelTitle, title, thumbnails } = snippet;

  const mainTitle = title.length > 65 ? `${title.slice(0, 65)}...` : title;

  const views =
    viewCount > 1_000_000
      ? `${(viewCount / 1_000_000).toFixed(1)}M`
      : `${(viewCount / 1000).toFixed()}K`;

  return (
    <div className="p-2 m-1 w-80 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="flex flex-col justify-between h-[136px]">
        <li className="font-semibold py-2">{mainTitle}</li>
        <li>
          <div>{channelTitle}</div>
          <div>{views} views</div>
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

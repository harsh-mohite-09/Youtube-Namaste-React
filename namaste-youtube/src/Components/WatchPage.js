import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainerSingle from "./CommentsContainerSingle";
import LiveChat from "./LiveChat";
import { getVideoDetailsUrl, getCommentsUrl } from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faThumbsUp,
  faThumbsDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getComments();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(getVideoDetailsUrl(searchParams.get("v")));
    const json = await data.json();
    console.log("video", json);
    setVideoDetails(json.items[0]);
  };

  const getComments = async () => {
    const data = await fetch(getCommentsUrl(searchParams.get("v")));
    const json = await data.json();
    console.log("comments", json.items);
    setComments(json.items);
  };

  const getLikeCount = (likeCount) => {
    return Math.floor(likeCount / 1000);
  };

  const getSubscriberCount = (subscriberCount) => {
    return subscriberCount > 1_000_000
      ? `${(subscriberCount / 1000000).toFixed(1)}M`
      : `${Math.floor(subscriberCount / 1000).toFixed(0)}K`;
  };

  const getTrimmedVideoTitle = (title) => {
    return title?.length > 85 ? `${title.slice(0, 85)}...` : title;
  };

  return (
    <div className="flex flex-col w-full px-5 col-span-6">
      <div className="flex ml-14 mt-5 ">
        <div className="rounded-xl overflow-hidden">
          <iframe
            width="906"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-5 w-auto">
          <LiveChat />
        </div>
      </div>
      <div className="ml-14 mt-2 w-[906px]">
        <p className="text-xl font-semibold">
          {getTrimmedVideoTitle(videoDetails?.snippet?.title)}
        </p>
        <div className="flex mt-4 justify-between">
          <div className="flex">
            <FontAwesomeIcon
              icon={faUser}
              className="p-4 text-xl rounded-full bg-slate-100"
            />
            <div className="ml-4">
              <div className="text-lg font-semibold">
                {videoDetails?.snippet?.channelTitle}
              </div>
              <div className="text-sm">
                {getSubscriberCount(videoDetails?.statistics?.viewCount)}{" "}
                subscribers
              </div>
            </div>
            <div className="flex justify-center items-center">
              <span className="ml-10 px-4 py-2 font-semibold  bg-black text-white rounded-l-full rounded-r-full hover:bg-gray-600 hover:cursor-pointer">
                <p>Subscribe</p>
              </span>
            </div>
          </div>
          <div className="flex mr-2">
            <div className="flex justify-center items-center">
              <span className="ml-4 px-4 py-2 flex justify-center items-center bg-gray-100 rounded-l-full hover:bg-gray-200 hover:cursor-pointer">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p className="ml-2">
                  {getLikeCount(videoDetails?.statistics?.likeCount)}K
                </p>
              </span>
              <span className="pr-4 py-3 pl-4 flex justify-center items-center bg-gray-100 rounded-r-full hover:bg-gray-200 hover:cursor-pointer">
                <FontAwesomeIcon icon={faThumbsDown} />
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="ml-4 px-4 py-2 flex justify-center items-center bg-gray-100 rounded-l-full rounded-r-full hover:bg-gray-200 hover:cursor-pointer">
                <FontAwesomeIcon icon={faShare} />
                <p className="ml-2">Share</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <CommentsContainerSingle comments={comments} />
    </div>
  );
};

export default WatchPage;

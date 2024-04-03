import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { RedBorderVideoCard, VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const VideoContainer = () => {
  const [youtubedata, setyoutubedata] = useState([]);
  const fetchdata = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setyoutubedata(youtubedata.concat(json.items));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  if (!youtubedata.length) {
    return (
      <div className="flex flex-wrap">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap  ">
      {youtubedata &&
        youtubedata.map((video, index) => {
          return (
            <Link to={"/watch?v=" + video.id} key={index}>
              <VideoCard video={video} />
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;

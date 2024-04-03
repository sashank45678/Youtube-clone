import React from "react";

export const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-3 m-3 shadow-lg w-[15rem] h-80 rounded-lg overflow-y-auto no-scrollbar">
      <img alt="videoloading" className="w-60 rounded-lg" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="px-2 py-0 font-semibold">{channelTitle}</li>
        <li className="px-2 py-0 font-semibold">{statistics.viewCount}-Views</li>
      </ul>
    </div>
  );
};
export const RedBorderVideoCard=({video})=>{
  return (<div className="border border-red-400">
    <VideoCard video={video}/>
  </div>)
}
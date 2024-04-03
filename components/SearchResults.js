import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API, API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";

const SearchResults = () => {
  const [fetchedvideos, setfetchedvideos] = useState(null);
  const [searchparams] = useSearchParams();
  const searchvideos = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        searchparams.get("search_query") +
        "&type=video&key=" +
        API_KEY
    );
    const json = await data.json();
    setfetchedvideos(json.items);
  };
  useEffect(() => {
    searchvideos();
  }, [searchparams.get("search_query")]);
  if(!fetchedvideos){
    return (<div className='flex flex-wrap'><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></div>)
  }
  return (
    <div>
        <ButtonList/>
    <div className="col-span-10 flex flex-wrap">
      {
      fetchedvideos &&
        fetchedvideos.map((video, index) => {
          return (
            <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}>
            <div className="w-[20rem] shadow-lg m-2 px-3 py-2">

              <img
                className="px-3 py-2 rounded-2xl w-[24rem]"
                key={video.videoId}
                src={video.snippet.thumbnails.high.url}
              />
              <h2 className="font-semibold px-2 py-2">{video.snippet.title}</h2>
            </div>
            </Link>
          );
        })
    }
    </div>
    </div>
  );
};

export default SearchResults;

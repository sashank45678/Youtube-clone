import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglesideBar } from "../utils/sidebar";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import VideoSuggestions from "./VideoSuggestions";
import { cacheResults } from "../utils/searchSlice";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Head = () => {
  const [youtubeSuggestions, setyoutubeSuggestions] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const[showSuggestions,setshowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>{
    return store.search
  })
  const texttobesearched=useRef(null)
  const fetchdata = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(cacheResults({[searchQuery]:json[1]}))
    setyoutubeSuggestions(json[1]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache && searchCache[searchQuery]){
        setyoutubeSuggestions(searchCache[searchQuery])
      }
      else{
      fetchdata();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(togglesideBar());
  };
  return (
    <div className="p-3 m-2 grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <div onClick={handleClick} className="w-20 h-16 cursor-pointer">
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          />
        </div>
        <div className="w-32">
          <img
            className="w-12/12 h-20"
            alt=""
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </div>
      </div>
      <div className="">
        <div className="flex col-span-10 w-12/12 mx-auto pt-6 pl-12">
          <input ref={texttobesearched}
            value={searchQuery}
            onChange={(e) => {
              setsearchQuery(e.target.value);
            }}
            className="w-[36rem] rounded-lg h-8 px-4 py-5 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="search anything"
            onFocus={()=>{
              setshowSuggestions(true)
            }}
            onBlur={()=>{
              setTimeout(()=>{setshowSuggestions(false)
              setsearchQuery("")},500)
            }}
          />
          <div>
            <button className="border border-gray-400 bg-gray-200 text-white rounded-r-full py-2 pr-2"  >
              <Link to={"/results?search_query="+searchQuery}>🔍</Link>
            </button>
          </div>
        </div>
        {youtubeSuggestions.length>0 && showSuggestions&&(
          <div className="absolute shadow-lg px-4 py-2 mt-1 ml-12 w-[35rem] bg-white rounded-lg border border-gray-100 cursor-pointer">
            <ul>
              {showSuggestions&&youtubeSuggestions.length>0&&
                youtubeSuggestions.map((suggestion, index) => {
                  return (
                      <VideoSuggestions key={index}suggestion={suggestion}/>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 w-20 pt-4 ml-40">
        <img
          alt=""
          className="h-12"
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;

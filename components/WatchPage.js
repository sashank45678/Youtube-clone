import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidesideBar } from "../utils/sidebar";
import { useSearchParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import CommentsList1 from "./CommentsList1";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v")
  useEffect(() => {
    dispatch(hidesideBar());
  }, []);
  return (
    videoId && (
      <div className="col-span-9 py-4 px-12 w-full">
        <div className="flex">
        <iframe
          width="870"
          height="490"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <LiveChat/>
        </div>
        </div>
        <div className="w-8/12 rounded-lg border border-gray-400 pt-2 mt-0">
          <CommentsList video_id={videoId}/>
        </div>
      </div>
    )
  );
};

export default WatchPage;

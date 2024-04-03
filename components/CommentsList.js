import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
const CommentsList = ({ video_id }) => {
  const [fetchedcomments, setfetchedcomments] = useState(null);
  const fetchcomments = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
        API_KEY +
        "&textFormat=plainText&part=snippet&" +
        "videoId=" +
        video_id +
        "&maxResults=200"
    );
    const json = await data.json();
    setfetchedcomments(json.items);

  };
  useEffect(() => {
    fetchcomments(video_id);
  }, [video_id]);
  return (
    <div className="px-4 py-0">
      <h1 className="font-bold  text-2xl">Comments:</h1>
      {fetchedcomments &&
        fetchedcomments.map((comment, index) => {
          return (
            <div key={comment.id} className="border border-gray-70 shadow-md w-[51rem] h-[6rem] flex my-2 overflow-auto">
                <div className="w-[4rem]"><img className="rounded-3xl px-3 py-2"alt="userimage"src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/></div>
                <div className="flex flex-col">
                <h2 className="font-bold px-1 py-1">{comment.snippet.topLevelComment.snippet.authorDisplayName}</h2>
              <p className=" pt-1 px-1 ">
                {comment.snippet.topLevelComment.snippet.textDisplay}
              </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CommentsList;

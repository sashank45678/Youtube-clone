import React from "react";
import { Link } from "react-router-dom";
const VideoSuggestions = ({ suggestion }) => {
  return (
    <Link to={"/results?search_query="+suggestion}>
    <li className="flex justify-start shadow-sm rounded-md hover:bg-gray-200 cursor-default px-2 py-2">
      🔍 {suggestion}
    </li>
  </Link>

  );
};

export default VideoSuggestions;

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
import SearchResults from "./SearchResults";
import SideBar from "./SideBar";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="results" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default Body;

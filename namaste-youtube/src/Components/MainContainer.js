import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-5 ml-4  flex-grow">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

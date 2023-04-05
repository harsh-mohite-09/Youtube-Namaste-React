import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-5 flex flex-col items-center col-span-6">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

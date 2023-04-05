import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-5 flex flex-col items-center ${
        isMenuOpen ? "col-start-2 col-end-8" : "col-start-1 col-end-8"
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

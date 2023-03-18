import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex items-center col-span-1">
        <div>
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="menu"
          />
        </div>
        <div>
          <img
            className="h-14 ml-3"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex items-center justify-center col-span-10">
        <input
          className="border border-gray-500 rounded-l-full h-10 w-1/3 px-4"
          type="text"
          autoFocus
          placeholder="Search"
        />
        <button className="bg-gray-100 py-[0.4rem] pr-2 pl-1 h-10 rounded-r-full border border-l-0 border-gray-500 text-sm">
          <img
            className="h-full mx-4"
            src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png"
            alt="search"
          />
        </button>
      </div>
      <div className="col-span-1">
        <div className="flex justify-end items-center h-full">
          <img
            className="h-8"
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;

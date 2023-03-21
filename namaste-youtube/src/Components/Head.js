import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/config";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 50);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResult(json[1]);
    console.log(json[1]);
  };

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
          <a href="/">
            <img
              className="h-14 ml-3"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center col-span-10">
        <div className="flex flex-col w-1/2 relative">
          <div className="flex w-full">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-500 rounded-l-full h-10 w-full px-4"
              type="text"
              autoFocus
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() => setIsSearchFocus(false)}
              placeholder="Search"
            />
            <button className="bg-gray-100 py-[0.4rem] pr-2 pl-1 h-10 rounded-r-full border border-l-0 border-gray-500 text-sm hover:bg-gray-200">
              <img
                className="h-full mx-4"
                src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png"
                alt="search"
              />
            </button>
          </div>
          {searchResult.length !== 0 && isSearchFocus && (
            <div className="w-[88%] absolute top-14">
              <ul className="ml-3 p-2 shadow-lg shadow-neutral-500 rounded-lg bg-white">
                {searchResult.map((e) => {
                  return (
                    <li
                      className="p-1 hover:bg-gray-100 cursor-pointer rounded-md"
                      key={e}
                    >
                      🔍 {e}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
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

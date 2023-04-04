import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/config";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchFocus, setIsSearchFocus] = useState(false);

  const cachedSearchResults = useSelector(
    (store) => store.search.cachedResults
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearchResults[searchQuery]) {
        setSearchResult(cachedSearchResults[searchQuery]);
        console.log("Already Cached");
      } else {
        getSearchSuggestions();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResult(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    console.log(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 mt-0 shadow-md fixed top-0 w-full bg-white">
      <div className="flex items-center col-span-1">
        <div className="p-3  hover:bg-slate-200 rounded-full">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={() => toggleMenuHandler()}
            className="cursor-pointer"
          />
        </div>

        <div>
          <Link to="/">
            <img
              className="h-14 ml-3"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              alt="logo"
            />
          </Link>
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
              onBlur={() =>
                setTimeout(() => {
                  setIsSearchFocus(false);
                }, 100)
              }
              placeholder="Search"
            />
            <Link
              to={`results?search_query=${
                searchQuery.length ? searchQuery : "most+popular"
              }`}
            >
              <button className="bg-gray-100 py-[0.4rem] pr-2 pl-1 h-10 rounded-r-full border border-l-0 border-gray-500 text-sm hover:bg-gray-200">
                <img
                  className="h-full mx-4"
                  src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png"
                  alt="search"
                />
              </button>
            </Link>
          </div>
          {searchResult.length !== 0 && isSearchFocus && (
            <div className="w-[88%] absolute top-14">
              <ul className="ml-3 p-2 shadow-lg shadow-neutral-500 rounded-lg bg-white">
                {searchResult.map((e) => {
                  return (
                    <Link
                      to={`results?search_query=${e}`}
                      onClick={() => setSearchQuery(e)}
                      key={e}
                    >
                      <li className="p-1 hover:bg-gray-100 cursor-pointer rounded-md">
                        🔍 {e}
                      </li>
                    </Link>
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

import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchQueryUrl } from "../utils/helper";
// import { SEARCH_DATA } from "../utils/config";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery] = useSearchParams();

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(getSearchQueryUrl(searchQuery));
    const json = await data.json();
    // const json = SEARCH_DATA;
    console.log(json.items);
    setSearchResults(json.items);
  };

  return (
    <div className="col-span-6 flex justify-center">
      <div className="flex flex-col w-4/5">
        {searchResults.map((video) => {
          const { title, description, thumbnails } = video.snippet;
          return (
            <Link
              to={`/watch?v=${video?.id?.videoId}`}
              key={video?.id?.videoId}
            >
              <div className="flex my-3">
                <div className="h-[180px] min-w-[320px] rounded-xl overflow-hidden">
                  <img
                    src={thumbnails?.medium?.url}
                    alt="thumbnail"
                    className=""
                  />
                </div>
                <div className="flex flex-col ml-5 mt-1">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-5 w-[80%]">{description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;

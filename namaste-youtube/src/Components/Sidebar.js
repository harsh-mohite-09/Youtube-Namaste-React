import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTicket,
  faDisplay,
  faBook,
  faVideo,
  faClockRotateLeft,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

import { faClock } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-3 shadow-lg sidebar-container w-56 col-span-1">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} className="mr-4 text-lg" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faTicket} className="mr-4 text-lg" />
          Shorts
        </li>
        <li>
          <FontAwesomeIcon icon={faDisplay} className="mr-4 text-lg" />
          Subscriptions
        </li>
      </ul>
      <hr className="mt-4" />
      <ul>
        <li>
          <FontAwesomeIcon icon={faBook} className="mr-4 text-lg" />
          Library
        </li>
        <li>
          <FontAwesomeIcon icon={faClockRotateLeft} className="mr-4 text-lg" />
          History
        </li>
        <li>
          <FontAwesomeIcon icon={faVideo} className="mr-4 text-lg" />
          Your Videos
        </li>
        <li>
          <FontAwesomeIcon icon={faFilm} className="mr-4 text-lg" />
          Your Movies
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} className="mr-4 text-lg" />
          Watch Later
        </li>
      </ul>
      <hr className="mt-4" />
      <h1 className="mt-4 text-lg">Subscriptions</h1>
      <ul className="mt-2">
        <li>Codevolution</li>
        <li>Akshay Saini</li>
        <li>Veritasium</li>
        <li>Sadhguru</li>
      </ul>
    </div>
  );
};

export default Sidebar;

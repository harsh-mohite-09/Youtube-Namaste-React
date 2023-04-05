import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import Sidebar from "./Sidebar";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  });

  return (
    <div className="mt-28 grid grid-cols-7">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

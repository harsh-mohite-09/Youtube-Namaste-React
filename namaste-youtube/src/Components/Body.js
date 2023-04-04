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
    <div className="grid grid-cols-6 columns-8 mt-28">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

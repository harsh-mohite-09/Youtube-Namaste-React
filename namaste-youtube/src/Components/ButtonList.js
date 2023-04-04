import React from "react";
import Button from "./Button";
import { BUTTON_LIST } from "../utils/config";

const ButtonList = () => {
  return (
    <div className="flex ml-8">
      {BUTTON_LIST.map((e, i) => (
        <Button name={e} key={i} />
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";
import { Toggle } from "@/components";

const TogglePage = () => {
  return (
    <>
      <div>
        <h1>Toggle</h1>
      </div>
      <Toggle toggleState={false}></Toggle>
    </>
  );
};

export default TogglePage;

import React from "react";
import { AutoComplete } from "@/components";

const AutoCompletePage = () => {
  return (
    <>
      <div>
        <h1>AutoComplete</h1>
      </div>
      <AutoComplete
        savedWords={["refurbished", "antique", "Vintage", "중고A급"]}
      ></AutoComplete>
    </>
  );
};

export default AutoCompletePage;

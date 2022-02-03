import React from "react";
import { Tab } from "@/components";

const TabPage = () => {
  return (
    <>
      <div>
        <h1>Tab</h1>
      </div>
      <Tab tabs={["Tab menu ONE", "Tab menu TWO", "Tab menu THREE"]}></Tab>
    </>
  );
};

export default TabPage;

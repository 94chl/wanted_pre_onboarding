import React, { useState } from "react";
import styles from "./Tab.module.scss";
import classNames from "classnames";

const { tabContainer, buttonBox, tabButton, selected, tabContent } = styles;

const Tab = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const changeTab = (e) => {
    setTabIndex(parseInt(e.target.dataset.tabindex));
  };

  return (
    <div className={classNames(tabContainer)}>
      <div className={classNames(buttonBox)}>
        {tabs.map((tab, index) => (
          <button
            className={classNames(tabButton, {
              [selected]: index === tabIndex,
            })}
            onClick={(e) => changeTab(e)}
            key={`tab${tab}-${index}`}
            data-tabindex={index}
          >
            {`Tab${index + 1}`}
          </button>
        ))}
      </div>
      <div className={classNames(tabContent)}>
        <span>{tabs[tabIndex]}</span>
      </div>
    </div>
  );
};

export default Tab;

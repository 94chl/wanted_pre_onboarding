import React from "react";
import classNames from "classnames";
import styles from "./DefaultTemplate.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const { header, container, selectedTab, content } = styles;

const tabs = ["Toggle", "Modal", "Tab", "Tag", "AutoComplete", "ClickToEdit"];

const DefaultTemplate = ({ children }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  return (
    <div className={classNames(container)}>
      <div className={classNames(header)}>
        <ul>
          {tabs.map((tab) => (
            <li className={classNames({ [selectedTab]: selected === tab })}>
              <button
                onClick={() => {
                  navigate(`/${tab}`);
                  setSelected(tab);
                }}
                type="button"
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(content)}>{children}</div>
    </div>
  );
};

export default DefaultTemplate;

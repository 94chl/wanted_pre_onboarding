import React, { useState } from "react";
import styles from "./Toggle.module.scss";
import classNames from "classnames";

const { toggleBox, toggleButton, toggled, toggleBackground, toggleCircle } =
  styles;

const Toggle = ({ toggleState }) => {
  const [isToggled, setIsToggled] = useState(toggleState);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={classNames(toggleBox)}>
      <button className={classNames(toggleButton)} onClick={onToggle}>
        <div
          className={classNames(toggleBackground, {
            [toggled]: isToggled,
          })}
        ></div>
        <div
          className={classNames(toggleCircle, {
            [toggled]: isToggled,
          })}
        ></div>
      </button>
    </div>
  );
};

export default Toggle;

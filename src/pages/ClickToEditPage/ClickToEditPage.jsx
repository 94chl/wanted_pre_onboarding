import React, { useRef, useState } from "react";
import styles from "./ClickToEditPage.module.scss";
import classNames from "classnames";
import { ClickToEdit } from "@/components";

const { inputBox, outputBox } = styles;

const ClickToEditPage = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const submitInput = (e, sort) => {
    e.preventDefault();
    if (sort === "name") {
      setUserName(nameRef.current.value);
      nameRef.current.blur();
    }
    if (sort === "age") {
      setUserAge(ageRef.current.value);
      ageRef.current.blur();
    }
  };

  return (
    <>
      <div>
        <h1>ClickToEdit</h1>
      </div>
      <div className={classNames(inputBox)}>
        <div>
          <p>이름</p>
          <ClickToEdit
            stateName="name"
            inputRef={nameRef}
            onSubmit={(e) => submitInput(e, "name")}
          ></ClickToEdit>
        </div>
        <div>
          <p>나이</p>
          <ClickToEdit
            stateName="age"
            inputRef={ageRef}
            onSubmit={(e) => submitInput(e, "age")}
          ></ClickToEdit>
        </div>
      </div>
      <div className={classNames(outputBox)}>
        <div>{`이름 ${userName}`}</div>
        <div>{`나이 ${userAge}`}</div>
      </div>
    </>
  );
};

export default ClickToEditPage;

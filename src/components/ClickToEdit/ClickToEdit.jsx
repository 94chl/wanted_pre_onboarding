import React, { useEffect, useState } from "react";

const ClickToEdit = ({ stateName, inputRef, onSubmit }) => {
  const [focus, setFocus] = useState("");

  useEffect(() => {
    if (focus === stateName) inputRef.current.focus();
  }, [focus]);

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
        setFocus("");
      }}
      onClick={(e) => {
        setFocus(stateName);
        e.target.focus();
      }}
      onBlur={(e) => {
        onSubmit(e);
        setFocus("");
      }}
    >
      <input
        type="text"
        disabled={focus !== stateName}
        ref={inputRef}
        id={`input${stateName}`}
        style={{ padding: "5px", textAlign: "center" }}
      />
    </form>
  );
};

export default ClickToEdit;

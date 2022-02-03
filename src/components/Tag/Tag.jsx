import React, { useRef, useState } from "react";
import styles from "./Tag.module.scss";
import classNames from "classnames";

const { tagContainer, tagBox, tagContent, inputBox } = styles;

const Tag = ({ savedTags }) => {
  const [tags, setTags] = useState(savedTags || []);
  const inputRef = useRef(null);

  const removeTag = (e) => {
    const targetIndex = parseInt(e.target.closest("div").dataset.tagindex);
    setTags([...tags].filter((_, index) => index !== targetIndex));
  };

  const submitTag = (e) => {
    e.preventDefault();
    setTags([...tags, inputRef.current.value]);
    e.target.reset();
  };

  return (
    <div className={classNames(tagContainer)}>
      <div className={classNames(tagBox)}>
        {tags.map((tag, index) => (
          <div
            className={classNames(tagContent)}
            key={`tag${tag}-${index}`}
            data-tagindex={index}
          >
            <div>{tag}</div>
            <button onClick={(e) => removeTag(e)}>x</button>
          </div>
        ))}
        <form onSubmit={(e) => submitTag(e)}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Press enter to add tags"
          />
        </form>
      </div>
    </div>
  );
};

export default Tag;

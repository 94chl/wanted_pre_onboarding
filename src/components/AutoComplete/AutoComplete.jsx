import React, { useRef, useState } from "react";
import styles from "./AutoComplete.module.scss";
import classNames from "classnames";

const { autoCompleteContainer, wordBox, inputBox, resetButton } = styles;

const AutoComplete = ({ savedWords }) => {
  const [words, setWords] = useState(savedWords || []);
  const [matchWords, setMatchWords] = useState(words);
  const inputRef = useRef(null);

  const changeInput = () => {
    const newWord = inputRef.current.value;
    const autoCompletes = words.filter((word) => {
      const regex = new RegExp(newWord, "gi");
      return word.match(regex);
    });
    setMatchWords(autoCompletes);
  };

  const submitInput = (e) => {
    e.preventDefault();
    const newWord = inputRef.current.value.trim();
    if (!words.includes(newWord) && newWord !== "") {
      setWords([...words, newWord]);
      setMatchWords([...words, newWord]);
    }
    inputRef.current.value = "";
  };

  const selectMatchWord = (e) => {
    inputRef.current.value = e.target.textContent;
  };

  const resetInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    setMatchWords(words);
  };

  return (
    <div className={classNames(autoCompleteContainer)}>
      <form onChange={() => changeInput()} onSubmit={(e) => submitInput(e)}>
        <div className={classNames(inputBox)}>
          <input ref={inputRef} type="text" />
          <button
            onClick={resetInput}
            className={classNames(resetButton)}
            type="button"
          >
            x
          </button>
        </div>
        <div className={classNames(wordBox)}>
          {matchWords.map((word, index) => (
            <button
              key={`matchWord${word}-${index}`}
              onClick={(e) => selectMatchWord(e)}
              type="button"
            >
              {word}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AutoComplete;

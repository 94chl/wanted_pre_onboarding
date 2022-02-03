import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";

const {
  modal,
  modalContainer,
  modalContent,
  modalButton,
  showModalButton,
  hideModalButton,
  hide,
} = styles;

const Modal = ({ modalState, modalOpenText, modalContentText }) => {
  const [isShowed, setIsShowed] = useState(modalState);

  const showModal = () => {
    setIsShowed(true);
  };

  const hideModal = (e) => {
    const target = e.target.classList;
    if (target.contains(modal) || target.contains(modalButton))
      setIsShowed(false);
  };

  return (
    <div>
      <div
        className={classNames(modal, { [hide]: !isShowed })}
        onClick={(e) => hideModal(e)}
      >
        <div className={classNames(modalContainer)}>
          <button
            className={classNames(modalButton, hideModalButton)}
            onClick={(e) => hideModal(e)}
          >
            x
          </button>
          <div className={classNames(modalContent)}>{modalContentText}</div>
        </div>
      </div>
      <div>
        <button
          className={classNames(modalButton, showModalButton, {
            [hide]: isShowed,
          })}
          onClick={showModal}
        >
          {modalOpenText}
        </button>
      </div>
    </div>
  );
};

export default Modal;

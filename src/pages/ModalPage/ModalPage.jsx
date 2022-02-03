import React from "react";
import { Modal } from "@/components";

const ModalPage = () => {
  return (
    <>
      <div>
        <h1>Modal</h1>
      </div>
      <Modal
        modalState={false}
        modalOpenText="Modal Open"
        modalContentText="HELLO CODESTATES!"
      ></Modal>
    </>
  );
};

export default ModalPage;

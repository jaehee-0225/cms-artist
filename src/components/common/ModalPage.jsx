import React, { useState } from "react";
import Modal from "../../styles/ModalStyle.jsx";
import Button from 'react-bootstrap/Button';


function ModalPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true)
  };
  const closeModal = () => {
    setModalVisible(false)
  };
  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      {
        modalVisible && <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}>Hello</Modal>
      }
    </>
  )
}

export default ModalPage;
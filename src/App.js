import React from "react";
import { useState } from "react";
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/common/Layout.jsx";
// import MyModal from "./components/common/MyModal.jsx";

// import Modal from "./components/common/ModalPage.jsx";

import useModals from './components/modal/useModals.jsx';
// import MyModal1 from './components/modal/MyModal1.jsx';
import { modals } from './components/modal/Modals.jsx';



const App= () => {

  // Modal
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.MyModal1, {
      onSubmit: () => {
        console.log('비즈니스 로직 처리..')
      },
    });

  };
  // const handleModalSubmit = () => {
  //   setOpen(false);
  // };
  // const handleModalCancel = () => setOpen(false);


  // 전역
  // const [isOpenModal, setIsOpenModal] = useState(false);
  
  // const handleCloseModal = () => {
  //   setIsOpenModal(false);
  // }

  return (
    <div className="App">
      {/* <Modal visible={isOpenModal} onClose={handleCloseModal}>Hello</Modal> */}
      <Layout>        
        {/* <MyModal isOpen={isOpen} onSubmit={onSubmit} onCancel={onCancel}/> */}
      </Layout>
      <button onClick={handleClick}>모달열기</button>
      {/* <MyModal1 onClick={handleClick}></MyModal1> */}
    </div>
  );
}

export default App;

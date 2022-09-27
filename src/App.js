import React from "react";
import { useState } from "react";
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/common/Layout.jsx";
import MyModal from "./components/common/MyModal.jsx";


function App() {

  const [isOpen, setOpen] = useState(false);    
  const handleClick = () => {
      setOpen(true);
      console.log(setOpen)
  }  
  const onSubmit= () => {
      // 특정 로직
      setOpen(false);
  }
  const onCancel = () => {
      setOpen(false);
  }

  return (
    <div className="App">
      <Layout>
        <MyModal isOpen={isOpen} onSubmit={onSubmit} onCancel={onCancel}/>
      </Layout>
    </div>
  );
}

export default App;

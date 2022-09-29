import React, { useEffect, useState } from "react";
import '../assets/css/common.css';
import TableList from "../components/table/TableList.jsx";
import MyModal from "../components/common/MyModal.jsx";

import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { GoSearch } from 'react-icons/go';




const LanguageList = ({openModal}) => {
  
  // Modal
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true)
  }  
  const onSubmit= () => {
    // 특정 로직
    setShow(false);
  }  
  const handleClose = () => {
    setShow(false);
  } 


    return (
      <div className="language_container">        
        <form className="search_bar d-flex" action="#" method="post" noValidate="noValidate">
          <Form.Select className="form-control" id="search_bar">
              <option>페이지</option>
              <option>KR</option>
              <option>EN</option>
          </Form.Select>
          <input type="text" className="form-control search-slt bg-light query" placeholder="Search" />
          <Button className="edit" variant="primary" type="submit"><GoSearch /></Button>
          
        </form>
      
        <Card className="shadow">
          <Card.Header>
            <h5>언어팩 관리</h5>            
          </Card.Header>
          <Card.Body>
            <Card.Title className="filter_area mb-3">
              <div className="d-flex">         
                <Form.Select className="form-group form-control table_filter me-2">
                  <option>최신순</option>
                  <option>페이지순</option>
                </Form.Select>
                <Form.Select className="form-group form-control table_filter me-3">
                  <option>전체</option>
                  <option>대기</option>
                  <option>적용</option>
                  <option>미적용</option>
                </Form.Select>
              </div>
              <Button onClick={handleClick} variant="primary" className="add">추가하기</Button>
              <Button onClick={openModal} variant="primary" className="add">추가하기</Button>
            </Card.Title>
            
            <TableList /> 

          </Card.Body>
        </Card>
        <MyModal show={show} handleClick={handleClick} onSubmit={onSubmit} handleClose={handleClose} />
      </div>
    );
  
};

export default LanguageList;
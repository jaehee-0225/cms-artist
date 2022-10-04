import React, { useEffect, useState } from "react";
import '../assets/css/common.css';
import TableList from "../components/table/TableList.jsx";
import MyModalAdd from "../components/common/modal/MyModalAdd.jsx";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { GoSearch } from 'react-icons/go';
import axios from "axios";




const LanguageList = () => {

  const [type, setType] = useState("");

  // Modal
  const [show, setShow] = useState(false);
  const [langKey, setLangKey] = useState("");
  const [txtEn, setTxtEn] = useState("");
  const [txtKr, setTxtKr] = useState("");
  const [statusKey, setStatusKey] = useState("0");
  // const [inputText, setInputText] = useState("");


  const handleClick = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
    setLangKey("");
    setTxtEn("");
    setTxtKr("");
  } 
  const keyHandler = (e) =>{
    e.preventDefault();
    setLangKey(e.target.value);
  }
  const txtEnHandler = (e) =>{
    e.preventDefault();
    setTxtEn(e.target.value);
  }
  const txtKrHandler = (e) =>{
    e.preventDefault();
    setTxtKr(e.target.value);
  }
  const statusHandler = (e) =>{
    setStatusKey(e.target.value);
  }

  const onSubmit= () => {
    // body에 데이터 저장
    let body = {
      "lang_code" : langKey,
      "en" : txtEn,
      "ko" : txtKr,
      "status": Number(statusKey)
    }
    // body로 데이터보내기
    const putPost = async () => {
      try{
        const res = await axios.put('/lang', body)
      } catch{
        console.log('error')
      }      
    }
    putPost();
    setShow(false);
    setLangKey("");
    setTxtEn("");
    setTxtKr("");
  }

  

    return (
      <div className="language_container">        
        <form className="search_bar d-flex" action="#" method="post" noValidate="noValidate">
          <Form.Select className="form-control" id="search_bar">
              <option value="page">페이지</option>
              <option value="kr">KR</option>
              <option value="en">EN</option>
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
                <Form.Select 
                  className="form-group form-control table_filter me-2"
                  as="select"
                  value={type}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                  }}  
                >
                  <option value="newest">최신순</option>
                  <option value="page">페이지순</option>
                </Form.Select>
                <Form.Select 
                  className="form-group form-control table_filter me-3"
                  as="select"
                  value={type}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                  }}  
                >
                  <option value="전체">전체</option>
                  <option value="대기">대기</option>
                  <option value="적용">적용</option>
                  <option value="미적용">미적용</option>
                </Form.Select>
              </div>
              <Button onClick={handleClick} variant="primary" className="add">추가하기</Button>
            </Card.Title>
            
            <TableList /> 

          </Card.Body>
        </Card>
        
        <MyModalAdd 
          show={show} 
          onSubmit={onSubmit} 
          handleClose={handleClose}
          langKey={langKey}
          txtEn={txtEn}
          txtKr={txtKr}
          statusKey={statusKey}
          keyHandler={keyHandler}
          txtEnHandler={txtEnHandler}
          txtKrHandler={txtKrHandler}
          statusHandler={statusHandler}
        />
      </div>
    );
  
};

export default LanguageList;
import React, { useState, useEffect, useMemo } from "react";
import '../assets/css/common.css';
import axios from "axios";
// import data from "./data.json";
import Paging from "../components/table/Paging.js";

import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { GoSearch } from 'react-icons/go';
import styled from "styled-components";

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50px;
`;
const LangKey = styled.p`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: #858587;
  word-break: break-all;
`;


const LangTable = () => {  

  const [posts, setPosts] = useState([]); //aixos 받아온 데이터 저장
  const [currentPosts, setCurrentPosts] = useState([]); //보여줄 포스트
  const [page, setPage] = useState(1); //현재페이지
  const [postPerPage] = useState(10); //페이지당 아이템 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  
  
  //items호출
  useEffect(() => {
    axios.get('/lang/all')
    .then(res => setPosts(res.data))
    .catch(err => console.log('error'))
  }, []);

  // const data: { col1: string; col2: string }[] = useMemo(()=>
  //   [
  //     {
  //       lang_code: data.lang_code,
  //       en : data.en,
  //     }
  //   ]
  // )

  const render = (status) => {
    const statusStr = status === 0 ? '대기' : status === 1 ? '적용' :'미적용';
    const statusColor = status === 0 ? 'grey' : status === 1 ? 'green' :'red';
    return (<p className="mb-2 item_status" value={statusStr} style={{color: statusColor, fontWeight: 800}}><Circle style={{backgroundColor: statusColor}}></Circle>{statusStr}</p>);
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
              <Button variant="primary" className="add">추가하기</Button>
            </Card.Title>
            <Table className="shadow-sm mb-5" bordered hover>
              <thead>
                <tr align="center">
                  <th className="col-2">Key</th>
                  <th className="col">Text</th>
                  <th className="col-1">Status</th>
                  <th width="100px">Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentPosts.map((items, id) => (                    
                    <tr key={id} value={items.status}>
                      <td><LangKey className="lang_key text-white">{items.lang_code}</LangKey></td>
                      <td>
                        <table className="inner_table">
                          <tbody>
                            <tr>
                              <td className="en" style={{ wordBreak: "break-word"}}>{items.en}</td>
                            </tr>
                            <tr>
                              <td className="ko" style={{ wordBreak: "break-word"}}>{items.ko}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td align="center" style={{verticalAlign: "middle"}} >
                        {render(items.status)}
                      </td>
                      <td align="center" style={{verticalAlign: "middle"}}>
                        <Button variant="warning" className="edit">수정</Button>
                      </td>
                    </tr>
                  ))                  
                }
              </tbody>
            </Table>

            <Paging totalCount={posts.length} page={page} postPerPage={postPerPage} pageRangeDisplayed={5} handlePageChange={handlePageChange} />

          </Card.Body>
        </Card>
        
      </div>
    );
  
};

export default LangTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Paging from "../../components/table/Paging.js";
import MyModalEdit from "../common/modal/MyModalEdit.jsx";
// import ModalContext from "../../components/common/ModalContext.js";

import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
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

const TableList = ( ) => {
  //페이징처리
  const [posts, setPosts] = useState([]); //aixos 받아온 데이터 저장
  console.log(posts)
  const [currentPosts, setCurrentPosts] = useState([]); //보여줄 포스트
  const [page, setPage] = useState(1); //현재페이지
  const [postPerPage] = useState(10); //페이지당 아이템 개수
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handlePageChange = (page) => {    
    localStorage.setItem('current_page', page)
    setPage(page)
  };


  //items, api호출
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const res = await axios.get('/lang/all')
        setPosts([...res.data.items].reverse());
        setCurrentPosts([...res.data.items].slice(indexOfFirstPost, indexOfLastPost));
      } catch{
        console.log('error')
      }      
    }
    fetchPosts();
  }, [indexOfFirstPost, indexOfLastPost, page]); 



  //게시물 상태
  const render = (status) => {
    const statusStr = status === 1 ? '대기' : status === 0 ? '적용' :'미적용';
    const statusColor = status === 1 ? 'grey' : status === 0 ? 'green' :'red';
    return (<p className="mb-2 item_status" value={statusStr} style={{color: statusColor, fontWeight: 800}}><Circle style={{backgroundColor: statusColor}}></Circle>{statusStr}</p>);
  }

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

  



  return(
    <>
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
                  <Button onClick={handleClick} variant="warning" className="edit">수정</Button>
                </td>
              </tr>
            ))                  
          }
        </tbody>
      </Table>

      <Paging totalCount={posts.length} page={page} postPerPage={postPerPage} pageRangeDisplayed={5} handlePageChange={handlePageChange} />

      <MyModalEdit 
        show={show} 
        onSubmit={onSubmit} 
        handleClose={handleClose}
        // langKey={langKey}
        // txtEn={txtEn}
        // txtKr={txtKr}
        // keyHandler={keyHandler}
        // txtEnHandler={txtEnHandler}
        // txtKrHandler={txtKrHandler}
        // SubmitHandler={SubmitHandler}
      />
      
    </>
  )  
}

export default TableList;
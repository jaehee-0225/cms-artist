import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton  from 'react-bootstrap/CloseButton';


const MyModalAdd = ({show, handleClose, onSubmit, keyHandler, txtEnHandler, txtKrHandler, SubmitHandler, statusHandler, langKey, txtEn, txtKr, setStatusKey} ) => {
  
  return(
    <Modal show={show} className={show ? 'open' : 'close'} centered >
      <Modal.Header align="left">
        <Modal.Title>추가하기</Modal.Title>
        <CloseButton onClick={handleClose}></CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={SubmitHandler}>
          <Form.Group
            className="mb-3"
            controlId="lang_key"
          >
            <Form.Label>Key:</Form.Label>
            <Form.Control 
              as="input" 
              rows={1} 
              required
              type="text"
              value={langKey}
              onChange={keyHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="lang_text_en"
          >
            <Form.Label>Text(En):</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              required
              type="text"
              value={txtEn}
              onChange={txtEnHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="lang_text_kr"
          >
            <Form.Label>Text(Kr):</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              required
              type="text"
              value={txtKr}
              onChange={txtKrHandler}
              />
          </Form.Group>
          <Form.Group>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check 
                defaultChecked
                inline
                name="group1"
                type={type}
                id={'apply'}
                value={0}
                label={'적용'}
                onChange={statusHandler}
              />
              <Form.Check
                inline
                name="group1"
                type={type}
                id={'unapplied'}
                value={1}
                label={'대기'}
                onChange={statusHandler}
              />
            </div>
          ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MyModalAdd;


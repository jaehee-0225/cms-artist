import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton  from 'react-bootstrap/CloseButton';

const MyModalEdit = ({show, handleClose, onSubmit} ) => {
  
  return(
    <Modal show={show} className={show ? 'open' : 'close'} centered >
      <Modal.Header align="left">
        <Modal.Title>수정하기</Modal.Title>
        <CloseButton onClick={handleClose}></CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Key:</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea2"
          >
            <Form.Label>Text(En):</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea3"
          >
            <Form.Label>Text(Kr):</Form.Label>
            <Form.Control as="textarea" rows={3} />
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

const MyModalAdd = ({show, handleClose, onSubmit} ) => {
  
  return(
    <Modal show={show} className={show ? 'open' : 'close'} centered >
      <Modal.Header align="left">
        <Modal.Title>추가하기</Modal.Title>
        <CloseButton onClick={handleClose}></CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Key:</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea2"
          >
            <Form.Label>Text(En):</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea3"
          >
            <Form.Label>Text(Kr):</Form.Label>
            <Form.Control as="textarea" rows={3} />
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

export default MyModalEdit;


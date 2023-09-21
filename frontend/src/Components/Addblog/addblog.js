import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './addblog.css'
import userapiservice from '../../services/users/userapiservice';
import { toast } from 'react-toastify';


function AddBlog({ open, onClose })
{
  const [title,setTitle]=useState()
  const [blog,setBlog]=useState()
  const user_id=1//static
  const HandleSubmit= async (e)=>{
    e.preventDefault()
    try {
      const response= await userapiservice.addblog({user_id,title,blog})
      if(response.data==="Blog saved successfully"){
        toast.success("Blog posted")
      }
      else{
        toast.error("Failed to post, Retry")
      }
      
    } catch (error) {
      console.log("Error at catch",error)
      throw(error)
    }
  }
  return (
    <>
    <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your thoughts...." onChange={(e)=>{
          setBlog(e.target.value)
        }} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
      </>
    
  );
}

export default AddBlog;

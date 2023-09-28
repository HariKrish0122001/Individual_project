import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './addblog.css'
import userapiservice from '../../services/users/userapiservice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function AddBlog()
{
 
  const [title,setTitle]=useState()
  const [blog,setBlog]=useState()
  const user_id=localStorage.getItem('user_id')
  const navigate=useNavigate()
  const HandleSubmit= async (e)=>{
    e.preventDefault()
    try {
      const response= await userapiservice.addblog({user_id,title,blog})
      if(response.data==="Blog saved successfully"){
        toast.success("Blog posted")
        navigate('/dashboard')
      }
      else{
        toast.error("Failed to post, Retry")
      }
      
    } catch (error) {
      console.log("Error at catch",error)
      throw(error)
    }
  }
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(!token)
    {
      navigate('/')
    }
  },[])
  return (
    <>
    <Navbar />
    <div className='blog_bg'>
      <div className='blog-main'>
        <h2> New Blog</h2>
      <Form onSubmit={HandleSubmit} className='blog_container'>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="secondary" onClick={()=>{
        navigate('/dashboard')
      }}>
       Cancel
      </Button>
    </Form>
    </div>
    </div>
    </>
    
  );
}

export default AddBlog;
